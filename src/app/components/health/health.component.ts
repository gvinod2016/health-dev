import { Component } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  quotations =
    {
      q: 'Are you younger than 65?',
      yes: {
        q: 'Do you have Medicare or Medicaid?',
        yes: {
          q: 'Confirming your zip code is 500032',
          yes: {
            q: 'Can you take a phone call now?',
            yes: { type: 'call', phoneNo: '(888) 818-7077' },
            no: { q: 'To MediaAlpha clicks results', type: 'input' },
            type: 'q'
          },
          no: {
            q: 'Got it! Are you looking for coverage in Telangana',
            yes: {
              q: 'Can you take a phone call now?',
              yes: { type: 'call', phoneNo: '(888) 818-7077' },
              no: { q: 'To MediaAlpha clicks results', type: 'input' },
              type: 'q'
            },
            no: {
              q: 'Can you take a phone call now?',
              yes: { type: 'call', phoneNo: '(888) 818-7077' },
              no: { q: 'To MediaAlpha clicks results', type: 'input' },
              type: 'q'
            },
            type: 'q'
          },
          type: 'q'
        },
        no: {
          q: 'Confirming your zip code is 500032',
          yes: {
            q: 'Can you take a phone call now?',
            yes: { type: 'call', phoneNo: '(888) 818-7077' },
            no: { q: 'To MediaAlpha clicks results', type: 'input' },
            type: 'q'
          },
          no: {
            q: 'Got it! Are you looking for coverage in Telangana',
            yes: {
              q: 'Can you take a phone call now?',
              yes: { type: 'call', phoneNo: '(888) 818-7077' },
              no: { q: 'To MediaAlpha clicks results', type: 'input' },
              type: 'q'
            },
            no: {
              q: 'Can you take a phone call now?',
              yes: { type: 'call', phoneNo: '(888) 818-7077' },
              no: { q: 'To MediaAlpha clicks results', type: 'input' },
              type: 'q'
            },
            type: 'q'
          },
          type: 'q'
        },
        type: 'q'
      },
      no: {
        q: 'Do you have Medicare Parts A and B?	',
        yes: {
          q: 'Can you take a phone call now?',
          yes: { type: 'call', phoneNo: '(888) 818-7077' },
          no: {
            q: 'Are you interested in learning more about your options online?',
            yes: {
              q: 'Confirming your zip code is 500032',
              yes: { q: 'To MediaAlpha clicks results', type: 'input' },
              no: {
                q: 'Got it! Are you looking for coverage in Telangana',
                yes: { q: 'To MediaAlpha clicks results', type: 'input' },
                no: {
                  q: 'Can you take a phone call now?',
                  yes: { type: 'call', phoneNo: '(888) 818-7077' },
                  no: { q: 'To MediaAlpha clicks results', type: 'input' },
                  type: 'q'
                },
                type: 'q'
              },
              type: 'q'
            },
            no: {
              q: 'Got it! Are you looking for coverage in Telangana	',
              yes: { q: 'To MediaAlpha clicks results', type: 'input' },
              no: {
                q: ' Can you take a phone call now?',
                yes: { type: 'call', phoneNo: '(888) 818-7077' },
                no: { q: 'To MediaAlpha clicks results', type: 'input' },
                type: 'q'
              },
              type: 'q'
            },
            type: 'q'
          },
          type: 'q'
        },
        no: {
          q: 'Can you take a phone call now?',
          yes: { type: 'call', phoneNo: '(888) 818-7077' },
          no: {
            q: 'Are you interested in learning more about your options online?',
            yes: {
              q: 'Confirming your zip code is 500032',
              yes: { q: 'To MediaAlpha clicks results', type: 'input' },
              no: {
                q: 'Got it! Are you looking for coverage in Telangana',
                yes: { q: 'To MediaAlpha clicks results', type: 'input' },
                no: {
                  q: 'Can you take a phone call now?',
                  yes: { type: 'call', phoneNo: '(888) 818-7077' },
                  no: { q: 'To MediaAlpha clicks results', type: 'input' },
                  type: 'q'
                },
                type: 'q'
              },
              type: 'q'
            },
            no: {
              q: 'Got it! Are you looking for coverage in Telangana',
              yes: { q: 'To MediaAlpha clicks results', type: 'input' },
              no: {
                q: 'Can you take a phone call now?',
                yes: { type: 'call', phoneNo: '(888) 818-7077' },
                no: { q: 'To MediaAlpha clicks results', type: 'input' },
                type: 'q'
              },
              type: 'q'
            },
            type: 'q'
          },
          type: 'q'
        },
        type: 'q'
      },
      type: 'q'
    };

  onQuestionACtion(chlidNode: any) {
    console.log(chlidNode, 'chlidNode')

    this.quotations = chlidNode

  }
}
