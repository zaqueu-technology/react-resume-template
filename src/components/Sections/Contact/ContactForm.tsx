import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      setData(prevData => ({...prevData, [name]: value}));
    },
    [],
  );

  const handleSendMessage = useCallback(() => {
    const whatsappNumber = '5584991458984'; // Substitua pelo seu número completo, incluindo o código do país e da área.
    const message = `Olá, meu nome é ${data.name}. ${data.message}`;

    // Criar o link para WhatsApp com o texto da mensagem
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redireciona para o WhatsApp
    window.location.href = whatsappLink;
  }, [data]);

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4">
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Nome" required type="text" />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Mensagem"
        required
        rows={6}
      />
      <button
        aria-label="Enviar mensagem para WhatsApp"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        onClick={handleSendMessage}
        type="button">
        WhatsApp
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
