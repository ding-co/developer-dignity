// .ics
// iCalendar
const ics = require('ics');
require('dotenv').config({ path: `./nodemailer/.env` });
const nodemailer = require('./nodemailer');

const event = {
  start: [2022, 4, 30, 9, 30], // 년, 월, 일, 시, 분
  duration: {
    hours: 1,
    minutes: 30,
  },
  title: 'Node.js 스터디 모임',
  description: '개발자의 품격 부트캠프 1기 스터디 모임',
  location: '제주도 더그레잇 3층',
  geo: {
    lat: 30.12, // 위도
    lon: 50.45, // 경도
  },
  url: 'https://www.naver.com',
  organizer: {
    // 주최자
    name: 'ding-co',
    email: 'pangoons@gmail.com',
  },
  attendees: [
    // 참석자
    {
      name: 'pangoons',
      email: 'pangoons@naver.com',
      rsvp: true, // 회신 여부,
      role: 'REQ-PARTICIPANT', // 필수 참석자
    },
    {
      name: 'pangoons',
      email: 'pangoons@gmail.com',
      // rsvp: true, // 회신 여부,
      role: 'OPT-PARTICIPANT', // 선택 참석자
    },
  ],
};

const sendEmailWithIcs = async () => {
  ics.createEvent(event, async (error, value) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(value);
    const message = {
      from: 'pangoons@gmail.com',
      to: 'pangoons@naver.com, pangoons@gmail.com',
      subject: 'Node.js 스터디 모임',
      text: '개발자의 품격 부트캠프 1기 스터디 모임',
      icalEvent: {
        filename: 'invitation.ics', // iCalendar 파일
        method: 'REQUEST',
        content: value,
      },
    };

    await nodemailer.send(message);
  });
};

sendEmailWithIcs();
