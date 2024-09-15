type TChipProps = {
  children: string;
};

export default function Chip({ children }: TChipProps) {
  return (
    <span className="bg-white  border-2 border-fuchsia-600 text-fuchsia-600 px-2 py-1 rounded-full hover:scale-105 transform transition-transform text-nowrap  my-1 text-[10px] mb-2 mr-2">
      {children}
    </span>
  );
}
