import ImageProfileDefault from "../Resources/images/img-default.jpg";
import imageProfileMario from "../Resources/images/img-card-mario.png";
import imageProfileYeray from "../Resources/images/img-card-yeray.png";
import imageProfileJordi from "../Resources/images/img-card-jordi.png";
import imageProfileMaria from "../Resources/images/img-card-sarah.png";

export const getProfileImage = (id) => {
    if(id==26){
      return imageProfileMario
    }else if(id==25) {
      return imageProfileYeray
    }else if(id==28) {
        return imageProfileJordi
    }else{
      return ImageProfileDefault
    }
  }