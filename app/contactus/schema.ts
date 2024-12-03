import { z } from "zod";

export default z.object({
    email: z.string().email(),
    subject: z.string(),
    description: z.string()
})