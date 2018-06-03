export class LeaseMobileRequest {
  date: string;
  downPayment: number;
  remainBalance: number;
  interestRate: number;
  deductionType: string;
  category: Category;
  mobilePhone: Phone;
  guaranteesDto1: Guarantee;
  guaranteesDto2: Guarantee;
  customerDto: Customer;
}

export class Category {
  id: number;
}

export class Phone {
  id: number;
}

export class Customer {
  firstName: string;
  lastName: string;
  addressDto: Address;
}

export class Address {
  addressLine1: string;
  street: string;
  city: string;
  zipCode: string;
}

export class Guarantee {
  firstName: string;
  lastName: string;
  nic: string;
  addressDto: Address;
}
