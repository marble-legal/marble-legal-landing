// components/FeedbackCard.tsx
import Image from "next/image";

function FeedbackCard({
  user,
  feedback,
}: {
  feedback: string;
  user: {
    image: string;
    name: string;
    role: string;
  };
}) {
  return (
    <div className="relative p-[1.75rem] border-[3px] border-white rounded-[16px] shadow-[3px_14px_26px_0px_rgba(30,109,43,0.06)] bg-[rgba(255,255,255,0.33)] min-w-[375px] h-[314px]">
      <p className="text-[#575757]">{feedback}</p>
      <div className="absolute bottom-[1.75rem] flex flex-row gap-3 items-center">
        <Image
          src={user.image}
          alt="user"
          height={62}
          width={62}
          className="rounded-full"
        />
        <div className="flex flex-col text-sm leading-[120%]">
          <span className="text-[#7E7777]">{user.name}</span>
          <span className="text-[#131212] font-bold">{user.role}</span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
