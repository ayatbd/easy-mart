import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const ProductModal = ({ isModalOpen, setIsModalOpen }: any) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader className="flex flex-col items-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#DB4444"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <DialogTitle className="text-2xl font-bold">
            You&#39;re not logged in
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Please sign in to your account to add items to your cart or wishlist
            and continue shopping.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Link
            href="/signin"
            className="w-full bg-[#DB4444] text-white py-3 rounded-md font-medium text-center hover:bg-red-700 transition-all"
          >
            Sign In
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
