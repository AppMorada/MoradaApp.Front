interface ButtonProps {
   submit: string
}

export const Button = ({ submit }: ButtonProps) => {
   return (
      <button
         className="h-12 w-[442px] rounded-lg bg-primary font-extrabold text-background"
         type="submit"
      >
         {submit}
      </button>
   )
}
