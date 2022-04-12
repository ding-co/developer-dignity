module.exports = {
  categoryList: `select * from product_category;`,
  categoryDetail: `select * from product_category where product_category_id=?`,
  categoryInsert: `insert into product_category set ?`,
  categoryUpdate: `update product_category set ? where product_category_id=?`,
  categoryDelete: `delete from product_category where product_category_id=?`,
  // ToDO: product_image 테이블 만들어서 16_multer 연동해서 실습해보기
  imageInsert: ``,
};
