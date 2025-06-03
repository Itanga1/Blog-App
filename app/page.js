import Link from "next/link";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="text-3xl font-bold text-center">Blog posts</h1>
      <div className="flex flex-col items-center justify-center mt-5 gap-3">
        <div className="flex flex-col p-2 bg-blue-100 rounded-lg shadow-md gap-2 max-w-5/7">
          <p>
            fhhhhhhhhhh hjgjgjg jgj jhkh khhkh k khkhk hhkkkkkkkkk hkhkh kkkkkkkkhkh hkhkkkkkk k hkkkkkkkkkkkj jkjk kjk j kjk jkjkjjkjkjh g  gjjhkhkh jhkjkjjkyhgjj j jjhkjkh hkhkkh hhhkhk hkhhh jhhkhkhg j ghkhkhghih    ihihi h g hihihihih ik j kggug
          </p>
          <Link href={'/blog'} className="self-end pr-2 text-blue-500 underline">View more</Link>
        </div>
        <div className="flex flex-col p-2 bg-blue-100 rounded-lg shadow-md gap-2 max-w-5/7">
          <p>
            fhhhhhhhhhh hjgjgjg jgj jhkh khhkh k khkhk hhkkkkkkkkk hkhkh kkkkkkkkhkh hkhkkkkkk k hkkkkkkkkkkkj jkjk kjk j kjk jkjkjjkjkjh g  gjjhkhkh jhkjkjjkyhgjj j jjhkjkh hkhkkh hhhkhk hkhhh jhhkhkhg j ghkhkhghih    ihihi h g hihihihih ik j kggug
          </p>
          <Link href={'/blog'} className="self-end pr-2 text-blue-500 underline">View more</Link>
        </div>
        <div className="flex flex-col p-2 bg-blue-100 rounded-lg shadow-md gap-2 max-w-5/7">
          <p>
            fhhhhhhhhhh hjgjgjg jgj jhkh khhkh k khkhk hhkkkkkkkkk hkhkh kkkkkkkkhkh hkhkkkkkk k hkkkkkkkkkkkj jkjk kjk j kjk jkjkjjkjkjh g  gjjhkhkh jhkjkjjkyhgjj j jjhkjkh hkhkkh hhhkhk hkhhh jhhkhkhg j ghkhkhghih    ihihi h g hihihihih ik j kggug
          </p>
          <Link href={'/blog'} className="self-end pr-2 text-blue-500 underline">View more</Link>
        </div>
        <div className="flex flex-col p-2 bg-blue-100 rounded-lg shadow-md gap-2 max-w-5/7">
          <p>
            fhhhhhhhhhh hjgjgjg jgj jhkh khhkh k khkhk hhkkkkkkkkk hkhkh kkkkkkkkhkh hkhkkkkkk k hkkkkkkkkkkkj jkjk kjk j kjk jkjkjjkjkjh g  gjjhkhkh jhkjkjjkyhgjj j jjhkjkh hkhkkh hhhkhk hkhhh jhhkhkhg j ghkhkhghih    ihihi h g hihihihih ik j kggug
          </p>
          <Link href={'/blog'} className="self-end pr-2 text-blue-500 underline">View more</Link>
        </div>
      </div>
    </div>
  );
}
