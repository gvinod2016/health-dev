import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent  implements OnInit{

  stateName: string="";
  pincode: number = 0
  quotations: any = null;
  u65Phone = 18775778518;
  medicalCare = 18665021292;
    
    constructor(private http: HttpClient) { }
    ngOnInit(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          console.log(position.coords.latitude, position.coords.longitude, 'geolocatoin...')
          const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true&key=AIzaSyATY1qYx3oJJi94U-lKaQTlpiIbmqbC6iw"
          this.http.get(url).subscribe((res: any)=>{
            console.log(res)
            const apiRes = res?.results
            if(apiRes){
              console.log(apiRes, 'apiRes')
              const locationDetails = apiRes.filter((row: any)=> row.types.includes('postal_code'))
              
              const address_components = locationDetails[0].address_components
              console.log(locationDetails, 'locationDetails', address_components)
              this.stateName = address_components[address_components.length - 2]?.long_name
              this.pincode = address_components[0]?.long_name
              this.quotations = {
                q: 'Are you younger than 65?',
                yes: {
                  q: 'Do you have Medicare or Medicaid?',
                  yes: {
                    q: 'Confirming your zip code is ' + this.pincode,
                    yes: {
                      q: 'Can you take a phone call now?',
                      yes: { type: 'call', phoneNo: this.u65Phone },
                      no: { q: 'To MediaAlpha clicks results', type: 'input' },
                      type: 'q'
                    },
                    no: {
                      q: 'Got it! Are you looking for coverage in ' + this.stateName,
                      yes: {
                        q: 'Can you take a phone call now?',
                        yes: { type: 'call', phoneNo: this.u65Phone },
                        no: { q: 'To MediaAlpha clicks results', type: 'input' },
                        type: 'q'
                      },
                      no: {
                        q: 'Can you take a phone call now?',
                        yes: { type: 'call', phoneNo: this.u65Phone },
                        no: { q: 'To MediaAlpha clicks results', type: 'input' },
                        type: 'q'
                      },
                      type: 'q'
                    },
                    type: 'q'
                  },
                  no: {
                    q: 'Confirming your zip code is '+ this.pincode,
                    yes: {
                      q: 'Can you take a phone call now?',
                      yes: { type: 'call', phoneNo: this.u65Phone },
                      no: { q: 'To MediaAlpha clicks results', type: 'input' },
                      type: 'q'
                    },
                    no: {
                      q: 'Got it! Are you looking for coverage in ' + this.stateName,
                      yes: {
                        q: 'Can you take a phone call now?',
                        yes: { type: 'call', phoneNo: this.u65Phone },
                        no: { q: 'To MediaAlpha clicks results', type: 'input' },
                        type: 'q'
                      },
                      no: {
                        q: 'Can you take a phone call now?',
                        yes: { type: 'call', phoneNo: this.u65Phone },
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
                    yes: { type: 'call', phoneNo: this.medicalCare },
                    no: {
                      q: 'Are you interested in learning more about your options online?',
                      yes: {
                        q: 'Confirming your zip code is ' + this.pincode,
                        yes: { q: 'To MediaAlpha clicks results', type: 'input' },
                        no: {
                          q: 'Got it! Are you looking for coverage in ' + this.stateName,
                          yes: { q: 'To MediaAlpha clicks results', type: 'input' },
                          no: {
                            q: 'Can you take a phone call now?',
                            yes: { type: 'call', phoneNo: this.medicalCare},
                            no: { q: 'To MediaAlpha clicks results', type: 'input' },
                            type: 'q'
                          },
                          type: 'q'
                        },
                        type: 'q'
                      },
                      no: {
                        q: 'Got it! Are you looking for coverage in ' + this.stateName,
                        yes: { q: 'To MediaAlpha clicks results', type: 'input' },
                        no: {
                          q: ' Can you take a phone call now?',
                          yes: { type: 'call', phoneNo:  this.medicalCare },
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
                    yes: { type: 'call', phoneNo:  this.medicalCare },
                    no: {
                      q: 'Are you interested in learning more about your options online?',
                      yes: {
                        q: 'Confirming your zip code is ' + this.pincode,
                        yes: { q: 'To MediaAlpha clicks results', type: 'input' },
                        no: {
                          q: 'Got it! Are you looking for coverage in ' + this.stateName,
                          yes: { q: 'To MediaAlpha clicks results', type: 'input' },
                          no: {
                            q: 'Can you take a phone call now?',
                            yes: { type: 'call', phoneNo:  this.medicalCare },
                            no: { q: 'To MediaAlpha clicks results', type: 'input' },
                            type: 'q'
                          },
                          type: 'q'
                        },
                        type: 'q'
                      },
                      no: {
                        q: 'Got it! Are you looking for coverage in ' + this.stateName,
                        yes: { q: 'To MediaAlpha clicks results', type: 'input' },
                        no: {
                          q: 'Can you take a phone call now?',
                          yes: { type: 'call', phoneNo:  this.medicalCare },
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
            }
          })
        });
      } else {
        console.log('Geolocation is not supported by this browser.')
      }
    }

  onQuestionACtion(chlidNode: any) {
    console.log(chlidNode, 'chlidNode')
    if(chlidNode.type == 'input'){
      const url = 'https://medicareconsumer.com/u65-health-insurance/?location='+ this.pincode;
      window.open(url);
      // window.location.href = url
    } else {
      this.quotations = chlidNode
    }


  }
}
