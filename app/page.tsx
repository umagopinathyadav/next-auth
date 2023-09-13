"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import React from 'react'

const Home = () => {
    const { data, status } = useSession()
    if (status === "authenticated") {
        return <>
            <button onClick={e => signOut()}>Logout</button>
            <pre>{JSON.stringify(data)}</pre>
            <h1>{data.user?.name}</h1>
            <h1>{data.user?.email}</h1>
            <img src={data.user?.image as string} alt={data.user?.name as string} />
        </>
    }


    return <>
        <button onClick={e => signIn("google")}>Login with Google </button>
    </>
}

export default Home