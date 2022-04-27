const express = require('express');
const router = express.Router();
const mysql = require('../mysql');
const sql = require('../mysql/sql');

router.post('/', async (req, res) => {
  // orderInsert
  // r.insertId
  // orderDetailInsert
  // rollback

  // 1. connection 가져오기
  const conn = await mysql.getConnection();
  await conn.beginTransaction(); // 들어가기 준비 상태

  // 2. 주문의 헤더 정보 (order) 생성
  conn.query(sql['orderInsert'], req.body.header, async (err, rows, fields) => {
    if (err) {
      console.log(err);
      // rollback
      await conn.rollback(); // 에러 발생 시 처음으로 되돌려줌
      res.status(500).send({ err: err });
    } else {
      const orderId = rows.insertId;
      const items = [];
      for (const item of req.body.items) {
        items.push([orderId, item.product_id, item.order_qty]);
      }
      // 여러 개 넣을려면 배열에 담아 넘김 [items]
      conn.query(
        sql['orderItemInsert'],
        [items],
        async (err2, rows2, fields2) => {
          if (err2) {
            console.log(err2);
            await conn.rollback();
            res.status(500).send({ err: err2 });
          } else {
            // 모두 성공
            // commit
            await conn.commit();
            res.status(200).send(rows);
          }

          // 커넥션 풀 되돌려주기
          await conn.release();
        }
      );
    }
  });
});

module.exports = router;
