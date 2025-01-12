interface props {
  url: string;
}

const ProfileImg = ({ url }: props) => {
  return (
    <div className="flex content-center justify-center overflow-hidden">
      <img src={url} alt="profile img" className="h-52 w-52 rounded-full object-cover" />
    </div>
  );
};

export default ProfileImg;
