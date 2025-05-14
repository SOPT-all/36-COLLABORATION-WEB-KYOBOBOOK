import Card from '@/components/Card';
import sampleImage from '@/assets/img/sample.png';

const Home = () => {
  return (
    <div>
      <Card imgUrl={sampleImage} title="첫 여름, 완주" type="short" />
      <Card imgUrl={sampleImage} title="첫 여름, 완주" type="long" />
    </div>
  );
};

export default Home;
