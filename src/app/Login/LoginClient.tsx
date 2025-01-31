// app/login/LoginClient.tsx
'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export default function LoginClient() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (session) {
    return (
      <div className="p-4">
        <h1>ログイン済み</h1>
        <div>ようこそ {session.user?.name}さん</div>
        <div>メール: {session.user?.email}</div>
        {session.user?.image && (
          <img src={session.user.image} alt="profile" className="w-10 h-10 rounded-full" />
        )}
        <button
          onClick={() => signOut()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          ログアウト
        </button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h1>ログインページ</h1>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Googleでログイン
      </button>
    </div>
  )
}