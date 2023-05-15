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
            yes: 'Initiate call to U65 Phone Number',
            no: 'To MediaAlpha clicks results'

          },
          no: {
            q: 'Got it! Are you looking for coverage in Telangana',
            yes: {
              q: 'Can you take a phone call now?',
              yes: 'Initiate call to U65 Phone Number',
              no: 'To MediaAlpha clicks results'
            },
            no: {
              q: 'Can you take a phone call now?',
              yes: 'Initiate call to U65 Phone Number',
              no: 'To MediaAlpha clicks results'
            }
          }
        },
        no: {
          q: 'Confirming your zip code is 500032',
          yes: {
            q: 'Can you take a phone call now?',
            yes: null,
            no: 'To MediaAlpha clicks results'
          },
          no: {
            q: 'Got it! Are you looking for coverage in Telangana',
            yes: {
              q: 'Can you take a phone call now?',
              yes: 'Initiate call to U65 Phone Number',
              no: 'To MediaAlpha clicks results'
            },
            no: {
              q: 'Can you take a phone call now?',
              yes: 'Initiate call to U65 Phone Number',
              no: 'To MediaAlpha clicks results'
            }
          }
        }
      },
      no: {
        q: 'Do you have Medicare Parts A and B?	',
        yes: {
          q: 'Can you take a phone call now?',
          yes: {
            q: 'Initiate call to Medicare Phone Number '
          },
          no: {
            q: 'Are you interested in learning more about your options online?',
            yes: {
              q: 'Confirming your zip code is {zip}',
              yes: 'To MediaAlpha clicks results',
              no: {
                q: 'Got it! Are you looking for coverage in {state}',
                yes: 'To MediaAlpha clicks results',
                no: 'Back to: Can you take a phone call now?'
              }
            },
            no: {
              q: 'Got it! Are you looking for coverage in {state}	',
              yes: 'To MediaAlpha clicks results',
              no: 'Back to: Can you take a phone call now?'
            }
          }
        },
        no: {
          q: 'Can you take a phone call now?',
          yes: {
            q: 'Initiate call to Medicare Phone Number',
          },
          no: {
            q: 'Are you interested in learning more about your options online?',
            yes: {
              q: 'Confirming your zip code is {zip}',
              yes: {
                q: 'To MediaAlpha clicks results',
              },
              no: {
                q: 'Got it! Are you looking for coverage in {state}',
                yes: 'To MediaAlpha clicks results',
                no: 'Back to: Can you take a phone call now?'
              }
            },
            no: {
              q: 'Got it! Are you looking for coverage in {state}',
              yes: 'To MediaAlpha clicks results',
              no: 'Back to: Can you take a phone call now?'
            }
          }
        }
      },
      id: 'q1'
    }

    ;

  onQuestionACtion(chlidNode: any) {
    console.log(chlidNode, 'chlidNode')
    this.quotations = chlidNode

  }
}
