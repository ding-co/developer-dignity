const cron = require('node-cron');
require('dotenv').config({ path: `./nodemailer/.env` });
const nodemailer = require('./nodemailer');
const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async (keyword) => {
  try {
    const html = (
      await axios.get(`https://www.jobkorea.co.kr/Search/?stext=${keyword}`)
    ).data;
    return html;
  } catch (e) {
    console.log(e);
  }
};

const parsing = async (page) => {
  const $ = cheerio.load(page);
  const jobs = [];
  const $jobList = $('.list-post');
  $jobList.each((idx, node) => {
    const jobTitle = $(node).find('.title:eq(0)').text().trim();
    const url =
      'https://www.jobkorea.co.kr' + $(node).find('a:eq(0)').attr('href');
    const company = $(node).find('.name:eq(0)').text().trim();
    const experience = $(node).find('.exp:eq(0)').text().trim();
    const education = $(node).find('.edu:eq(0)').text().trim();
    if (
      experience.indexOf('신입') > -1 ||
      experience.indexOf('경력무관') > -1
    ) {
      jobs.push({
        jobTitle,
        company,
        experience,
        education,
        url,
      });
    }
  });
  return jobs;
};

const getJob = async (keyword) => {
  const html = await getHTML(keyword);
  const jobs = await parsing(html);

  const h = [];
  h.push('<table style="border: 1px solid black">');
  h.push('<thead>');
  h.push('<tr>');
  h.push('<th style="border: 1px solid black">구인제목</th>');
  h.push('<th style="border: 1px solid black">회사명</th>');
  h.push('<th style="border: 1px solid black">경력</th>');
  h.push('<th style="border: 1px solid black">학력</th>');
  h.push('</tr>');
  h.push('</thead>');
  h.push('<tbody>');
  jobs.forEach((job) => {
    h.push(`<tr>`);
    h.push(`<td><a href=${job.url}>${job.jobTitle}</a></td>`);
    h.push(`<td>${job.company}</td>`);
    h.push(`<td>${job.experience}</td>`);
    h.push(`<td>${job.education}</td>`);
    h.push(`</tr>`);
  });
  h.push('</tbody>');
  h.push('</table>');

  const message = {
    from: 'pangoons@gmail.com',
    to: 'pangoons@naver.com',
    subject: 'Node.js 구인 회사 정보',
    html: h.join(''),
  };

  await nodemailer.send(message);
};

// 정각
cron.schedule('* * * * *', () => {
  getJob('node.js');
});
