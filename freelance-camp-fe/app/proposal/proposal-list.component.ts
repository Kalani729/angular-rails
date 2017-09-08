import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC company', 'http://porfolio.markalbright.com', 'Ruby on Rails', 150, 120, 15, 'mark@test.com')
  proposalTwo: Proposal = new Proposal(15, 'ABC company', 'http://porfolio.markalbright.com', 'Ruby on Rails', 150, 120, 15, 'mark@test.com')
  proposalThree: Proposal = new Proposal(15, 'ABC company', 'http://porfolio.markalbright.com', 'Ruby on Rails', 150, 120, 15, 'mark@test.com')

  proposals: Propsal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree,
  ]
}