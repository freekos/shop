import Show from "../../assets/img/show.png";
import Hide from "../../assets/img/hidden.png";

export const VisibilityChanger = (imgRef, Ref) => {
  if(Ref.current.type === "password") {
    Ref.current.type = "text";
    imgRef.current.src = Show;
  }else {
    Ref.current.type = "password";
    imgRef.current.src = Hide;
  }
} 