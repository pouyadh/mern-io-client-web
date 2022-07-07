import { Avatar } from "@mui/material";
import React from "react";

const blobImageToDataURL = (blob) =>
  new Promise((resolve) => {
    const fr = new FileReader();
    fr.onloadend = () => resolve(fr.result);
    fr.readAsDataURL(blob);
  });

const cropImage = (url, size) =>
  new Promise((resolve) => {
    const img = document.createElement("img");
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.width, 0, 0, size, size);
      const dataUrl = canvas.toDataURL("image/jpeg");
      canvas.remove();
      img.remove();
      resolve(dataUrl);
    };
    img.src = url;
  });

const InputAvatar = ({ src, size, accept = "image/*", onChange }) => {
  const handleAvatarFile = async (e) => {
    const blob = e.target.files[0];
    if (!blob) return;
    let dataUrl = await blobImageToDataURL(blob);
    dataUrl = await cropImage(dataUrl, 250);
    e.target.value = "";
    onChange(dataUrl);
  };
  return (
    <label htmlFor="avatar-file" style={{ alignSelf: "center" }}>
      <Avatar
        sx={{
          width: size,
          height: size,
          cursor: "pointer",
        }}
        src={src}
      />
      <input
        id="avatar-file"
        type="file"
        accept={accept}
        hidden
        onChange={handleAvatarFile}
      />
    </label>
  );
};

export default InputAvatar;
