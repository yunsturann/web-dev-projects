import { useFormStatus } from "react-dom";

export const SubmitButton = ({ title }: { title: string }) => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-400 hover:bg-blue-500 text-neutral-900 tracking-wider w-full p-2 font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out disabled:bg-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-500 disabled:text-neutral-900"
      disabled={status.pending}
    >
      {status.pending ? `${title}...` : title}
    </button>
  );
};
