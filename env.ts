import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
    OMDB_API_KEY: z.string(),
    OMDB_URI: z.string().refine((url) => url.startsWith("https"), "Invalid URL format"),
});

type Env = z.infer<typeof envSchema>;

export const ENV: Env = envSchema.parse(process.env);