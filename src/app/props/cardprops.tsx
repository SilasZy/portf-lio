// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
  
// } from "@/components/ui/card"

// // export const getImageProp: ImageProps = {
// //   src: "/cthulhu.png",
// //   width: 800,
// //   height: 400,
// //   alt: "Hero image Horror",
// //   quality: 100,
// //     priority: true, 
// //     sizes: "100vw",
// //     placeholder: "empty",   
// // };
// interface CardProps {
//      title: string;
//   description?: string;
//   content: React.ReactNode;
//   action?: string;
//   actionOnClick?: () => void;
//   className?: string;
//   animation?: string;
//   delay?: number;
// }


// export function Cards({ title, description, content, action, actionOnClick, className, animation, delay }: CardProps) {
//   return (
//     <Card className={className}>
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         {description && <CardDescription>{description}</CardDescription>}
//       </CardHeader>
//       <CardContent>{content}</CardContent>
//       {action && (
//         <CardFooter>
//           <CardAction>
//             <button onClick={actionOnClick}>{action}</button>
//           </CardAction>
//         </CardFooter>
//       )}
//     </Card>
//   )
// }

