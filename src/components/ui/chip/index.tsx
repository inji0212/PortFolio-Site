type TChipProps = {
  children: string;
};

export default function Chip({ children }: TChipProps) {
  return (
    <span className="bg-white dark:bg-fuchsia-100  border-2 border-fuchsia-600 text-fuchsia-600 px-2 py-1 rounded-full hover:scale-105 transform transition-transform text-nowrap  my-1">
      {children}
    </span>
  );
}
