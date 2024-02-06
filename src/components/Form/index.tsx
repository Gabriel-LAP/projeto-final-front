import styled from 'styled-components';

type FormProps = {
  display?: string;
  flexDirection?: string;
  alignItems?: string;

  gridtemplatecolumns?: string;

  onSubmit?: () => void;
};

const FormContainer = styled.form.attrs({
  typeof: 'submit',
})<FormProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  grid-template-columns: ${(props) => props.gridtemplatecolumns};
`;

export { FormContainer };
