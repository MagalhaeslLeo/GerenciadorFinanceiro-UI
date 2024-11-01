import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class Validadores {
  static data(control: AbstractControl): ValidationErrors | undefined {
    const dateString = control.value;

    // Check if the input is empty
    if (!dateString) {
      return undefined; // Return null if empty (no error)
    }

    // Define the regex pattern for the date format "dd/MM/yyyy"
    const dateFormatPattern = /^\d{2}\/\d{2}\/\d{4}$/;

    // Check if the input matches the format
    if (!dateFormatPattern.test(dateString.format("DD/MM/YYYY"))) {
      return { data: true }; // Return an error if it doesn't match
    }

    //
    // const resultadoRetornada = dateString.format("DD/MM/YYYY").split('/');
    // if (Number(resultadoRetornada[2])<1950) {
    //   return { data: true }; // Return an error if it doesn't match
    // }

    return undefined; // Return null if the format is correct
  }

  static cpf(pControl: FormControl): ValidationErrors | undefined {
    if (
      pControl.value != undefined &&
      pControl.value != null &&
      pControl.value.toString() != ""
    ) {
      const cpfSemMascara = pControl.value.replace(/\D/g, '');
      // Verifica se todos os dígitos são iguais
      const todosDigitosIguais = /^(\d)\1{10}$/.test(cpfSemMascara);
      if (todosDigitosIguais) {
        return { cpf: true };
      }
      if (
        !pControl.value.match("^[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}\\-[0-9]{2}$") &&
        !pControl.value.match("^[0-9]{11}$")
      ) {
        return { cpf: true };
      }
    }
    return undefined;
  }

  static cnpj(pControl: FormControl): ValidationErrors | undefined {
    if (
      pControl.value != undefined &&
      pControl.value != null &&
      pControl.value.toString() != ""
    ) {
      if (
        !pControl.value.match(
          "^[0-9]{2}\\.[0-9]{3}\\.[0-9]{3}\\/[0-9]{4}\\-[0-9]{2}$"
        ) &&
        !pControl.value.match("^[0-9]{14}$")
      ) {
        return { cnpj: true };
      }
    }
    return undefined;
  }

  static cep(pControl: FormControl): ValidationErrors | undefined {
    if (
      pControl.value != undefined &&
      pControl.value != null &&
      pControl.value.toString() != ""
    ) {
      if (
        !pControl.value.match("^[0-9]{2}\\.[0-9]{3}\\-[0-9]{3}$") &&
        !pControl.value.match("^[0-9]{5}\\-[0-9]{3}$") &&
        !pControl.value.match("^[0-9]{8}$")
      ) {
        return { cep: true };
      }
    }
    return undefined;
  }

  static entidadeJPA(pControl: FormControl): ValidationErrors | undefined {
    if (
      pControl.value != undefined &&
      pControl.value != null &&
      pControl.value.toString() != ""
    ) {
      if (!pControl.value.id) {
        return { entidadeJPA: true };
      }
    }

    return undefined;
  }

  static telefone(pControl: FormControl): ValidationErrors | undefined {
    if (
      pControl.value != undefined &&
      pControl.value != null &&
      pControl.value.toString() != ""
    ) {
      if (!pControl.value.match("^\\([0-9]{2}\\)\\s?[0-9]{4,5}\\-[0-9]{4}$")) {
        return { telefone: true };
      }
    }

    return undefined;
  }

  static telefoneOuCelularNovo(control: AbstractControl): ValidationErrors | null {
    const nValue = control.value ? control.value.replace(/\D/g, ''): '';
    if (nValue && nValue.length > 0) {
      const telefoneOuCelularPattern = /^[0-9]{10,11}$/;
      if (!telefoneOuCelularPattern.test(nValue)) {
          return { telefoneOuCelular: true };
      }
    }
    return null;
  }

  static celular(pControl: FormControl): ValidationErrors | undefined {
    if (
      pControl.value != undefined &&
      pControl.value != null &&
      pControl.value.toString() != ""
    ) {
      if (!pControl.value.match("^\\([0-9]{2}\\)\\s?9[0-9]{4}\\-[0-9]{4}$")) {
        return { celular: true };
      }
    }

    return undefined;
  }

  static email(pControl: FormControl): ValidationErrors | undefined {
    if (
      pControl.value != undefined &&
      pControl.value != null &&
      pControl.value.toString() != ""
    ) {
      if (!pControl.value.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")) {
        return { email: true };
      }
    }
    return undefined;
  }

  static emailNovo(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value)) {
      return { email: true };
    }

    return null;
  }

}
