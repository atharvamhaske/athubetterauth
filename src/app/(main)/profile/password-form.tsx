"use client"
import { passwordSchema } from "@/src/lib/validations"
import { useState } from "react"
import {z} from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/src/lib/auth-client";


const updatePasswordSchema = z.object({
    currentPassword: z.string().min(1, {message: "Current password is required"}),
    newPassword: passwordSchema
})//isme apan purana password lenge and new password jo bhii rakhna hai wo apne passwordSchema se match hona chahiye

type updatePasswordValues = z.infer<typeof updatePasswordSchema>

export default function PasswordForm() {
    const [status, setStatus] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<updatePasswordValues>({
        resolver: zodResolver(updatePasswordSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
        }
    })

    async function onSubmit({currentPassword, newPassword}: updatePasswordValues) {
        setStatus(null),
        setError(null)

        const {error} = await authClient.changePassword({
            currentPassword,
            newPassword,
            revokeOtherSessions: true
        })

        if(error) {
            setError(error.message || "failed to changed the password")
        } else {
            setStatus("Password changed successfully")
            form.reset()
        }
    }
}