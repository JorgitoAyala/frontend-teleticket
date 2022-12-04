export class Usuario {
  _id?: number;
  fullname: string;
  email: string;
  password: string;
  role: string;
  tickets?: {
    ticket_id: string;
    ticket_events: string[];
  };

  constructor(
    fullname: string,
    email: string,
    password: string,
    role: string,
    tickets: {
      ticket_id: string;
      ticket_events: string[];
    }
  ) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.role = role;
    this.tickets = tickets;
  }
}
