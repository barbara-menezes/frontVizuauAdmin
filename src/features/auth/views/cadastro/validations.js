import * as Yup from 'yup';

const validations = Yup.object().shape({
  email: Yup.string()
    .email('Precisa ser um email válido')
    .max(255)
    .required('Email é obrigatório'),
  senha: Yup.string().max(255).required('Senha é obrigatório'),
  usuario: Yup.string().max(255).required('O nome do usuário é obrigatório'),
  estado: Yup.string().max(255).required('Estado é obrigatório'),
  cidade: Yup.string().max(255).required('Cidade é obrigatório'),
  bairro: Yup.string().max(255).required('Bairro é obrigatório'),
  cep: Yup.string().max(255).required('CEP é obrigatório'),
  logradouro: Yup.string().max(255).required('Logradouro é obrigatório'),
  numero: Yup.string().required('Número é obrigatório'),
  complemento: Yup.string().max(255).required('Complemento é obrigatório')
});

export default validations;
