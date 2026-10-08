import fs from 'fs';
import path from 'path';

const dest = 'd:/Portfilo/public/assets/Mridul_Vijay_Professional_Resume_2026.pdf';
fs.mkdirSync(path.dirname(dest), { recursive: true });

const pdfHeader = '%PDF-1.4\n';
const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n';

const streamText = `BT
/F1 22 Tf
50 740 Td
(MRIDUL VIJAY) Tj
/F1 11 Tf
0 -22 Td
(Front-End Developer | AI-Assisted Web Developer | Product Builder) Tj
0 -16 Td
(Jaipur, Rajasthan, India | mridulvijay9252@gmail.com | github.com/Mridulvijay1234) Tj
0 -32 Td
/F1 13 Tf
(EXPERIENCE) Tj
/F1 10 Tf
0 -18 Td
(Zoho Corporation - Software Engineering Intern (Jun 2025 - Aug 2025)) Tj
0 -14 Td
(CodYart Software Solutions - Front-End Developer Intern (2025 - 2026)) Tj
0 -14 Td
(The Real Estate Company - Web Developer & SEO Intern (2025)) Tj
0 -28 Td
/F1 13 Tf
(EDUCATION) Tj
/F1 10 Tf
0 -18 Td
(Anand International College of Engineering - B.Tech CSE (2023 - 2027) | CGPA: 7.9) Tj
0 -14 Td
(Beetle's International School - Class XII CBSE (79%) | Class X CBSE (82%)) Tj
0 -28 Td
/F1 13 Tf
(SELECTED PROJECTS) Tj
/F1 10 Tf
0 -18 Td
(Clear Kun - Web Platform, SEO & Responsive UI) Tj
0 -14 Td
(Jarvis / Nexora AI OS - Governed Personal AI Assistant System) Tj
0 -14 Td
(CGI Web System - Low-Level Web Architecture (C/C++, Apache, Linux)) Tj
0 -14 Td
(Robot-Control Car - Robotics, Sensors & Embedded Systems) Tj
0 -14 Td
(Student Information System - C/C++, Data Structures) Tj
0 -28 Td
/F1 13 Tf
(CORE COMPETENCIES) Tj
/F1 10 Tf
0 -18 Td
(React.js, JavaScript, TypeScript, HTML/CSS, C/C++, Java, MERN, SEO, AI-Assisted Workflows) Tj
ET`;

const obj4 = `4 0 obj\n<< /Length ${Buffer.byteLength(streamText)} >>\nstream\n${streamText}\nendstream\nendobj\n`;
const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';

const body = pdfHeader + obj1 + obj2 + obj3 + obj4 + obj5;
const offset1 = pdfHeader.length;
const offset2 = offset1 + obj1.length;
const offset3 = offset2 + obj2.length;
const offset4 = offset3 + obj3.length;
const offset5 = offset4 + obj4.length;
const startxref = offset5 + obj5.length;

const xref = `xref
0 6
0000000000 65535 f \r
${String(offset1).padStart(10, '0')} 00000 n \r
${String(offset2).padStart(10, '0')} 00000 n \r
${String(offset3).padStart(10, '0')} 00000 n \r
${String(offset4).padStart(10, '0')} 00000 n \r
${String(offset5).padStart(10, '0')} 00000 n \r
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${startxref}
%%EOF`;

fs.writeFileSync(dest, body + xref);
console.log('Resume PDF generated at:', dest);
