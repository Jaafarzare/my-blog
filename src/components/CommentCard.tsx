import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type CardProps = {
  name: string;
  avatar: string;
  comment: string;
};

export default function CommentCard({ name, avatar, comment }: CardProps) {
  return (
    <Card className="flex w-[600px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          <Image src={avatar} alt="avatar" width={100} height={100} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{comment}</p>
      </CardContent>
    </Card>
  );
}
