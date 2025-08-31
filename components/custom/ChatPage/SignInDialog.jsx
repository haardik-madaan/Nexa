"use client"
import React, { use, useContext } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import ElectricBorder from '../../reactBits/ElectricBorder'
import { useGoogleLogin } from '@react-oauth/google'
import { UserDetailContext } from '@/context/UserDetailContext'
import axios from 'axios'
import { useMutation } from 'convex/react'
import uuid4 from 'uuid4'
import { api } from "@/convex/_generated/api";


function SignInDialog({ open, onOpenChange }){

  const {userDetails,setUserDetails} = useContext(UserDetailContext)

  const CreateUser = useMutation(api.users.createUser);

const googleLogin = useGoogleLogin({

  onSuccess: async (tokenResponse) => {
    console.log(tokenResponse);
    const userInfo = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      { headers: { Authorization: `Bearer ${tokenResponse?.access_token}` } 
    }

    );

    console.log(userInfo);
    const user = userInfo?.data
    await CreateUser({
      name: user?.name,
      tokenIdentifier: user?.sub,
      email: user?.email,
      image: user?.picture,
      uid: uuid4()
    });

    if(typeof window !== 'undefined'){
      localStorage.setItem("user",JSON.stringify(userInfo?.data))
    }

    setUserDetails(userInfo?.data)
    onOpenChange(false)

  },
  onError: errorResponse => console.log(errorResponse),
});
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl shadow-2xl border-none p-0">
       
        <ElectricBorder
          color="#7df9ff"
          speed={0.1}
          chaos={0.25}
          thickness={2.5}
          style={{ borderRadius: 20 }}
        >
          <div className="bg-black rounded-2xl p-6 shadow-xl">
            <DialogHeader className="text-center space-y-3">
              <DialogTitle className="text-2xl font-bold text-gray-700">
                Continue using <span className="text-indigo-600">NEXA</span>
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                Please sign in to an existing account or create a new one.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 mt-6">
              <Button
                variant="outline"
                className="flex items-center gap-3 w-full py-5 rounded-xl text-base font-medium shadow hover:shadow-lg transition-all hover:cursor-pointer"
                onClick={() => googleLogin()}
              >
                <FcGoogle className="w-6 h-6" />
                Sign in with Google
              </Button>
            </div>

            <DialogFooter className="mt-4 flex justify-center">
              <p className="text-xs text-gray-400">
                By continuing, you agree to our{" "}
                <span className="text-indigo-500 hover:underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-indigo-500 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
            </DialogFooter>
          </div>
        </ElectricBorder>
      </DialogContent>
    </Dialog>
  )
}

export default SignInDialog
