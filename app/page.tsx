import { signInWithGithub, signOut } from "@/actions/auth";
import { currentUser } from "@/data/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello, Aimani</p>
      <div>
        {user ? (
          <form action={signOut}>
            <button>ログアウト</button>
          </form>
        ) : (
          <form action={signInWithGithub}>
            <button>GitHubでログイン</button>
          </form>
        )}
      </div>
    </main>
  );
}
