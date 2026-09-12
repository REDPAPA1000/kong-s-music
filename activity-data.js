/* 진로활동 — tools/build-activity-data.py 가 만든다. 손으로 고치지 마세요. */
const careerItems = [
{id: "1898",t: "고미술사학과 수업",u: "https://www.youtube.com/watch?v=CGZ6Gw2JvtU",img: "https://img.youtube.com/vi/CGZ6Gw2JvtU/hqdefault.jpg",n: "교육부"},
{id: "1897",t: "법학과 수업",u: "https://www.youtube.com/watch?v=A2vKqKtOdEw",img: "https://img.youtube.com/vi/A2vKqKtOdEw/hqdefault.jpg",n: "교육부"},
{id: "1896",t: "웨딩산업과 수업",u: "https://www.youtube.com/watch?v=0CjrWX8wL4o",img: "https://img.youtube.com/vi/0CjrWX8wL4o/hqdefault.jpg",n: "교육부"},
{id: "1895",t: "전통조리학과 수업",u: "https://www.youtube.com/watch?v=-Pl9ZKENVEg",img: "https://img.youtube.com/vi/-Pl9ZKENVEg/hqdefault.jpg",n: "교육부"},
{id: "1894",t: "컴퓨터학과 수업",u: "https://www.youtube.com/watch?v=vcRCmxdgW4E",img: "https://img.youtube.com/vi/vcRCmxdgW4E/hqdefault.jpg",n: "교육부"},
{id: "1893",t: "축산학과 수업",u: "https://www.youtube.com/watch?v=QJRg5zXRDSA",img: "https://img.youtube.com/vi/QJRg5zXRDSA/hqdefault.jpg",n: "교육부"},
{id: "1892",t: "광고홍보학과 수업",u: "https://www.youtube.com/watch?v=Ns2irnwkEHY",img: "https://img.youtube.com/vi/Ns2irnwkEHY/hqdefault.jpg",n: "교육부"},
{id: "1891",t: "환경에너지공학과 수업",u: "https://www.youtube.com/watch?v=Qth2OVnAvN4",img: "https://img.youtube.com/vi/Qth2OVnAvN4/hqdefault.jpg",n: "교육부"},
{id: "1890",t: "화학과 수업",u: "https://www.youtube.com/watch?v=sIeNKJnY7P8",img: "https://img.youtube.com/vi/sIeNKJnY7P8/hqdefault.jpg",n: "교육부"},
{id: "1889",t: "KPOP학과 수업",u: "https://www.youtube.com/watch?v=C2xq7D2Lnzw",img: "https://img.youtube.com/vi/C2xq7D2Lnzw/hqdefault.jpg",n: "교육부"},
{id: "1888",t: "철도운전제어학과 수업",u: "https://www.youtube.com/watch?v=dTQ_G5EWQqg",img: "https://img.youtube.com/vi/dTQ_G5EWQqg/hqdefault.jpg",n: "교육부"},
{id: "1887",t: "경찰경호학과 수업",u: "https://www.youtube.com/watch?v=A7Nn_PijcvE",img: "https://img.youtube.com/vi/A7Nn_PijcvE/hqdefault.jpg",n: "교육부"},
{id: "1886",t: "문화재보존과학과 수업",u: "https://www.youtube.com/watch?v=PlN1rAku4qA",img: "https://img.youtube.com/vi/PlN1rAku4qA/hqdefault.jpg",n: "교육부"},
{id: "1885",t: "관광영어과 수업",u: "https://www.youtube.com/watch?v=thCFfEOaMDI",img: "https://img.youtube.com/vi/thCFfEOaMDI/hqdefault.jpg",n: "교육부"},
{id: "1884",t: "해양체육학과 수업",u: "https://www.youtube.com/watch?v=Ir91myyfLEw",img: "https://img.youtube.com/vi/Ir91myyfLEw/hqdefault.jpg",n: "교육부"},
{id: "1883",t: "실용음악과 수업",u: "https://www.youtube.com/watch?v=EASEoPW0LFM",img: "https://img.youtube.com/vi/EASEoPW0LFM/hqdefault.jpg",n: "교육부"},
{id: "1882",t: "호텔외식조리과 수업",u: "https://www.youtube.com/watch?v=rVOybZj4kX8",img: "https://img.youtube.com/vi/rVOybZj4kX8/hqdefault.jpg",n: "교육부"},
{id: "1881",t: "문예창작과 수업",u: "https://www.youtube.com/watch?v=3aA5YRDRgQc",img: "https://img.youtube.com/vi/3aA5YRDRgQc/hqdefault.jpg",n: "교육부"},
{id: "1880",t: "유아교육과 수업",u: "https://www.youtube.com/watch?v=XAVFFHF268A",img: "https://img.youtube.com/vi/XAVFFHF268A/hqdefault.jpg",n: "교육부"},
{id: "1879",t: "원예디자인과 수업",u: "https://www.youtube.com/watch?v=X7xhj2ayBsA",img: "https://img.youtube.com/vi/X7xhj2ayBsA/hqdefault.jpg",n: "교육부"},
{id: "1878",t: "뷰티산업학과 수업",u: "https://www.youtube.com/watch?v=Pmcie8RJtz0",img: "https://img.youtube.com/vi/Pmcie8RJtz0/hqdefault.jpg",n: "교육부"},
{id: "1877",t: "바리스타음료과 수업",u: "https://www.youtube.com/watch?v=DsmBVZ_vsUE",img: "https://img.youtube.com/vi/DsmBVZ_vsUE/hqdefault.jpg",n: "교육부"},
{id: "1876",t: "건축학과 수업",u: "https://www.youtube.com/watch?v=Ew6L5zicqhE",img: "https://img.youtube.com/vi/Ew6L5zicqhE/hqdefault.jpg",n: "교육부"},
{id: "1875",t: "곤충산업과 수업",u: "https://www.youtube.com/watch?v=VunvCY3Va_U",img: "https://img.youtube.com/vi/VunvCY3Va_U/hqdefault.jpg",n: "교육부"},
{id: "1874",t: "한의학과 수업",u: "https://www.youtube.com/watch?v=RLoHMi2oVMA",img: "https://img.youtube.com/vi/RLoHMi2oVMA/hqdefault.jpg",n: "교육부"},
{id: "1873",t: "유도학과 수업",u: "https://www.youtube.com/watch?v=1z53td6MztE",img: "https://img.youtube.com/vi/1z53td6MztE/hqdefault.jpg",n: "교육부"},
{id: "1872",t: "자동차학과 수업",u: "https://www.youtube.com/watch?v=aIuuQYH6UpA",img: "https://img.youtube.com/vi/aIuuQYH6UpA/hqdefault.jpg",n: "교육부"},
{id: "1871",t: "항공운항학과 수업",u: "https://www.youtube.com/watch?v=8g08LDEWoSI",img: "https://img.youtube.com/vi/8g08LDEWoSI/hqdefault.jpg",n: "교육부"},
{id: "1870",t: "연기예술학과 수업",u: "https://www.youtube.com/watch?v=BqKVGAXdFxk",img: "https://img.youtube.com/vi/BqKVGAXdFxk/hqdefault.jpg",n: "교육부"}
];

const majorItems = [];

const jobItems = [];
