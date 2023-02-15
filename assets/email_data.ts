export const messages = [
  {
    id: 1,
    subject: "Password Reset Request from Microsoft Office",
    sender: "Microsoft Office Support",
    senderEmail: "office_support@microsoft.com",
    status: "Open",
    href: "#",
    date: "1h ago",
    datetime: "2023-02-13T10:00",
    preview:
      "We've received a request to reset the password for your Microsoft Office account. Please find a response to your request below.",
    items: [
      {
        id: 100,
        author: "Microsoft Office Support",
        date: "Today at 10:00am",
        datetime: "2023-02-13T10:00",
        body: `
          <html>
            <head>
              <style>
                .body {
                  background-color: #ffffff;
                  padding: 20px;
                  text-align: left;
                }
                .a {
                  color: blue !important;
                }
              </style>
            </head>
            <body>
              <div class="body">
                <p>Dear user,</p></br>
                <p>We've received a request to reset the password for your Microsoft Office account. To reset your password, please click on the link below:</p></br>
                <a href='https://reset.microsoft.com'>https://reset.microsoft.com</a><br/><br/>
                <p>If you did not request a password reset, please ignore this message and your password will remain the same.</p></br>
                <p>Best regards,</p>
                <p>Microsoft Office Support Team</p>
              </div>
            </body>
          </html>
          `,
      },
    ],
  },
  {
    id: 2,
    subject: "Urgent request",
    sender: "James McDaniel",
    senderEmail: "james.mcdaniel@en1gmart.com",
    status: "Open",
    href: "#",
    date: "1d ago",
    datetime: "2023-02-07T10:00",
    preview:
      "Hello Jaime, Just wanted to send a quick reminder about our conference call tomorrow at 10am. Please let me know if there are any changes to the schedule. Looking forward to catching up with you!",
    items: [
      {
        id: 100,
        author: "James McDaniel",
        date: "Yesterday at 7:24am",
        datetime: "2021-01-28T19:24",
        body: `
          <html>
            <head>
              <style>
                .body {
                  background-color: #ffffff;
                  padding: 20px;
                  text-align: left;
                }
                a {
                  color: blue;
                }
              </style>
            </head>
            <body>
              <div class="body">
                <p>Dear Jane,</p></br>
                <p>I hope this email finds you well. I am writing to you in my capacity as the Chief People Officer of EnigMart. We are updating our employee records and we require your assistance to verify your personal information in our system.</p></br>
                <p>To do so, we have created a secure form that you need to fill out. Please follow the link below to access the form:</p></br>
                <a href='https://en1gmart.com/hr/profile/update'>https://en1gmart.com/hr/profile/update</a><br/></br>
                <p>Your prompt response to this request will be greatly appreciated.</p></br>
                <p>Best regards,</p></br>
                <p>James McDaniel</p>
                <p><b>CFO, EnigMart</b></p>
              </div>
            </body>
        </html>
        `,
      },
    ],
  },
  {
    id: 3,
    subject: "Proposal for New Project",
    sender: "Alexandra Smith",
    senderEmail: "jane.smith@enigmart.com",
    status: "Open",
    href: "#",
    date: "2d ago",
    datetime: "2023-02-11T12:00",
    preview:
      "Dear Team, I would like to present a proposal for a new project that I have been working on. I believe this project has the potential to bring significant benefits to our company. Please let me know if you have any questions or concerns. Best regards, Jane",
    items: [
      {
        id: 100,
        author: "Alexandra Smith",
        date: "Yesterday at 1:12pm",
        datetime: "2023-02-12T13:12",
        body: `
          <p>Dear Team,</p>
          <p>I would like to present a proposal for a new project that I have been working on. I believe this project has the potential to bring significant benefits to our company.</p>
          <p>Please let me know if you have any questions or concerns.</p>
          <p>Best regards,</p>
          <p>Jane</p>`,
      },
      {
        id: 101,
        author: "Emma Brown",
        date: "Yesterday at 3:45pm",
        datetime: "2023-02-12T15:45",
        body: `
          <p>Jane, I have some concerns about the feasibility of this project. Can we schedule a meeting to discuss further?</p>
          <p>Thank you,</p>
          <p>Emma Brown</p>
        `,
      },
      {
        id: 102,
        author: "Michael Johnson",
        date: "Today at 9:30am",
        datetime: "2023-02-13T09:30",
        body: `
          <p>Jane, I am very interested in this project and would love to contribute. Can you please provide more information on how I can get involved?</p>
          <p>Best regards,</p>
          <p>Michael Johnson</p>
        `,
      },
    ],
  },
  {
    id: 4,
    subject: "Proposal for Upgrading the Company's IT Infrastructure",
    sender: "Jane Doe",
    senderEmail: "jane.doe@enigmart.com",
    status: "Open",
    href: "#",
    date: "3d ago",
    datetime: "2023-02-10T11:00",
    preview: "Thanks so much! Can't wait to try it out.",
    items: [
      {
        id: 100,
        author: "Jane Doe",
        date: "Monday at 10:00am",
        datetime: "2023-02-10T10:00",
        body: "Thanks so much! Can't wait to try it out.",
      },
      {
        id: 101,
        author: "Steve Smith",
        date: "Tuesday at 9:00am",
        datetime: "2023-02-08T09:00",
        body: `
              <p>Hi Jane,</p>
              <p>I think your proposal is a great idea and I support it. Let's move forward with upgrading the company's IT infrastructure.</p>
              <p>Best regards,</p>
              <p>Steve</p>
            `,
      },
      {
        id: 102,
        author: "Emily Johnson",
        date: "Tuesday at 2:00pm",
        datetime: "2023-02-08T14:00",
        body: `
              <p>Jane,</p>
              <p>I agree with Steve. Upgrading our IT infrastructure is long overdue and will definitely benefit the company in the long run.</p>
              <p>Best regards,</p>
              <p>Emily</p>
            `,
      },
    ],
  },
];

export const messageExample = {
  subject: "Re: New pricing for existing customers",
  sender: "joearmstrong@example.com",
  status: "Open",
  items: [
    {
      id: 100,
      author: "Joe Armstrong",
      date: "Yesterday at 7:24am",
      datetime: "2021-01-28T19:24",
      body: "<p>Thanks so much! Can't wait to try it out.</p>",
    },
    {
      id: 101,
      author: "Monica White",
      date: "Wednesday at 4:35pm",
      datetime: "2021-01-27T16:35",
      body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
          <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
          <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
        `,
    },
    {
      id: 102,
      author: "Joe Armstrong",
      date: "Wednesday at 4:09pm",
      datetime: "2021-01-27T16:09",
      body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
          <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
          <p>– Joe</p>
        `,
    },
  ],
};
