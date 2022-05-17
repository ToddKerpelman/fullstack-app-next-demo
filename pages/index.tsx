import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="green"
      subtitle="Profile"
      title="Todd Kerpelman"
      description="10 Public Playlists"
      image="https://pbs.twimg.com/profile_images/348815041/IMG_1531_400x400.JPG"
      roundImage={true}
    ></GradientLayout>
  );
};

export default Home;
