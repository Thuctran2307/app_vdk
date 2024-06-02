export const get_data = async () => {
  // lấy thời gian hiện tại chuyển theo định dạng ddmmyyyy
  let date = formatDate();

  const response = await fetch(
    `https://vdk-ck-4b520-default-rtdb.firebaseio.com/${date}.json`,
  );
  const json = await response.json();
  return json;
};

export const set_data = async (data) => {
  // state : True | False
  // lấy thời gian hiện tại chuyển theo định dạng ddmmyyyy
  let date = formatDate();

  const body = {
    state: data,
  };

  // dùng phương thúc patch để gửi dữ liệu lên server
  await fetch(`https://vdk-ck-4b520-default-rtdb.firebaseio.com/${date}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

const formatDate = () => {
  const date = new Date();

  // Lấy ngày, tháng và năm
  const day = date.getDate();
  const month = date.getMonth() + 1; // Tháng được tính từ 0-11 nên cần +1
  const year = date.getFullYear();

  // Định dạng thành chuỗi ddmmyyyy
  const dayString = day < 10 ? `0${day}` : `${day}`;
  const monthString = month < 10 ? `0${month}` : `${month}`;
  const formattedDate = `${dayString}${monthString}${year}`;

  return formattedDate;
};
