
export interface FormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    title: string;
    children?: React.ReactNode;
    description?: string
}
