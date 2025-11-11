import { Card, CardContent } from "@mui/material";

export default function AuthLayout({ title, children, footer }: any) {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <Card variant="outlined" className="max-w-md mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-pink-400 ">
        <div className="bg-white/30 backdrop-blur-lg border border-black/10 rounded-x2 p-8 shadow-lg">
        <CardContent className="space-y-7">
          <div className="flex flex-col items-center">
            <img src="src\assets\images\logo_expense.png" alt="logo" className=" w-12 md:w-20"/>
            <h2 className="font-semibold text-lg lg:text-xl text-center">{title}</h2>
          </div>
          {children}
        </CardContent>
        {footer && (
          <div className="flex flex-col items-center mt-1 mb-1">
            {footer}
          </div>
        )}
        </div>
      </Card>
    </div>
  );
}
