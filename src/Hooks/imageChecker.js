import axios from "axios";

export const imageChecker = () => {
  axios
    .get("https://utterai.s3.ap-south-1.amazonaws.com/img/widget/RR.png")
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => console.log(err));
};

imageChecker();
