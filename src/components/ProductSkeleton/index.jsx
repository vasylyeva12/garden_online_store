import SkeletonCard from '../SkeletonCard';
import s from './index.module.css';


const SkeletonProduct = () => {
  const cards = Array.from({ length: 8 }, (_, index) => (
    <SkeletonCard key={index} />
  ));
  return (
    <div className="container">
      <div className={s.wrapper}>{cards}</div>
    </div>
  );
};
export default SkeletonProduct;