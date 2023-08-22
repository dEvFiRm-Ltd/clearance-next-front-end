import Link from '../../helpers/Link';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const DoneComponent = () => {
  return (
    <div className="p-5 flex flex-col items-center justify-center">
      <div className="font-bold text-2xl">THANK YOU!</div>
      <div className="font-[500] text-lg">
        Your order has been placed successfully
      </div>
      <div className="font-[500] text-gray-400 text-lg">
        Our team will start working on it immediately
      </div>

      <Link href="/">
        <div
          className="m-5 cursor-pointer flex items-center justify-center text-white w-full h-[100px] bg-red-600 rounded-full">
          SHOP MORE {process.env.NEXT_PUBLIC_CLEARANCE} OFFERS{' '}
          <FaArrowAltCircleRight
            className="ml-3"
            fill="white"
            size="30px"
            color={'transparent'}
          />
        </div>
      </Link>
      <Link href="/orders-list/all">
        <a className="cursor-pointer underline">show order list</a>
      </Link>
    </div>
  );
};
export default DoneComponent;
