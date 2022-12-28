describe('gaming Arrange', () => {
  it('fun gaming', async () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/arrange');
    cy.wait(100);
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('[aria-label="master out"]').click();
    cy.get('button[aria-label="new game"]').click();
    [...Array(8)].forEach((_, i) => {
      cy.get('[aria-label="target board"] > [aria-label*="target"]').then((targets) => {
        const a = arrange.find((a) => a.n === parseInt(targets.text())) ?? { n: 0, t: [] };
        for (const t of a.t) {
          cy.get(`button[aria-label="${t}"]`).click({ force: true });
        }
        if (i < 7) {
          cy.get('button[aria-label="round change"]').first().click();
        } else {
          cy.get('button[aria-label="round over"]').first().click();
        }
      });
    });
    cy.get('button[aria-label="new game"]').first().click();
    [...Array(8)].forEach((_, i) => {
      cy.get('[aria-label="target board"] > [aria-label*="target"]').then((targets) => {
        const a = arrange.find((a) => a.n === parseInt(targets.text())) ?? { n: 0, t: [] };
        for (const t of a.t) {
          cy.get(`button[aria-label="${t}"]`).click({ force: true });
        }
        if (i < 7) {
          cy.get('button[aria-label="round change"]').first().click();
        }
      });
    });
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="new game"]').click();
    cy.visit('/history');
    cy.get('button[aria-label="arrange"]').click();
    cy.get('select').should('be.empty');
    cy.get('[aria-label="master out"]').click();
    cy.get('select').should('not.be.empty');
    cy.get('[aria-label="game history"] tr').should('have.length', 4);
    cy.get('[aria-label="game history"] tr').first().children('td').should('have.length', 4);
    cy.get('[aria-label="game history"] tr')
      .first()
      .children('td')
      .eq(0)
      .should('have.text', 'Arrange');
    cy.get('[aria-label="game history"] tr').last().children('td').should('have.length', 8);
    cy.get('button[aria-label="delete history"]').eq(1).click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('button[aria-label="delete history"]').eq(0).click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
    cy.get('select').should('be.empty');
  });
});
export {};

const arrange = [
  { n: 180, t: ['20 triple', '20 triple', '20 triple'] },
  { n: 177, t: ['20 triple', '19 triple', '20 triple'] },
  { n: 174, t: ['20 triple', '19 triple', '19 triple'] },
  { n: 171, t: ['20 triple', '19 triple', '18 triple'] },
  { n: 170, t: ['20 triple', '20 triple', 'double bull'] },
  { n: 168, t: ['18 triple', '19 triple', '19 triple'] },
  { n: 167, t: ['double bull', '19 triple', '20 triple'] },
  { n: 165, t: ['15 triple', '20 triple', '20 triple'] },
  { n: 164, t: ['double bull', '19 triple', '19 triple'] },
  { n: 162, t: ['20 triple', '20 triple', '14 triple'] },
  { n: 161, t: ['double bull', '19 triple', '18 triple'] },
  { n: 160, t: ['double bull', 'double bull', '20 triple'] },
  { n: 159, t: ['19 triple', '20 triple', '14 triple'] },
  { n: 158, t: ['double bull', '18 triple', '18 triple'] },
  { n: 157, t: ['double bull', 'double bull', '19 triple'] },
  { n: 156, t: ['20 triple', '20 triple', '18 double'] },
  { n: 155, t: ['double bull', '19 triple', '16 triple'] },
  { n: 154, t: ['double bull', 'double bull', '18 triple'] },
  { n: 153, t: ['17 triple', '20 triple', '14 triple'] },
  { n: 152, t: ['double bull', '20 triple', '14 triple'] },
  { n: 151, t: ['double bull', 'double bull', '17 triple'] },
  { n: 150, t: ['double bull', 'double bull', 'double bull'] },
  { n: 149, t: ['double bull', '17 triple', '16 triple'] },
  { n: 148, t: ['double bull', 'double bull', '16 triple'] },
  { n: 147, t: ['double bull', '19 triple', '20 double'] },
  { n: 146, t: ['double bull', '20 triple', '18 double'] },
  { n: 145, t: ['double bull', 'double bull', '15 triple'] },
  { n: 144, t: ['double bull', '18 triple', '20 double'] },
  { n: 143, t: ['double bull', '19 triple', '18 double'] },
  { n: 142, t: ['double bull', 'double bull', '14 triple'] },
  { n: 141, t: ['double bull', '17 triple', '20 double'] },
  { n: 140, t: ['double bull', 'double bull', '20 double'] },
  { n: 139, t: ['double bull', 'double bull', '13 triple'] },
  { n: 138, t: ['double bull', 'double bull', '19 double'] },
  { n: 137, t: ['double bull', '17 triple', '18 double'] },
  { n: 136, t: ['double bull', 'double bull', '18 double'] },
  { n: 137, t: ['double bull', '15 triple', '20 double'] },
  { n: 134, t: ['double bull', 'double bull', '17 double'] },
  { n: 133, t: ['double bull', 'double bull', '11 triple'] },
  { n: 132, t: ['double bull', 'double bull', '16 double'] },
  { n: 131, t: ['double bull', '19 triple', '12 double'] },
  { n: 130, t: ['double bull', 'double bull', '15 double'] },
  { n: 129, t: ['double bull', '19 triple', '11 double'] },
  { n: 128, t: ['double bull', 'double bull', '14 double'] },
  { n: 127, t: ['double bull', '17 triple', '13 double'] },
  { n: 126, t: ['double bull', 'double bull', '13 double'] },
  { n: 125, t: ['double bull', '15 triple', '15 double'] },
  { n: 124, t: ['double bull', 'double bull', '12 double'] },
  { n: 123, t: ['double bull', '19 triple', '8 double'] },
  { n: 122, t: ['double bull', '12 triple', '18 double'] },
  { n: 121, t: ['double bull', '17 triple', '10 double'] },
  { n: 120, t: ['double bull', '20 outer single', 'double bull'] },
  { n: 119, t: ['double bull', '19 outer single', 'double bull'] },
  { n: 118, t: ['double bull', '18 outer single', 'double bull'] },
  { n: 117, t: ['double bull', '17 outer single', 'double bull'] },
  { n: 116, t: ['double bull', '16 outer single', 'double bull'] },
  { n: 115, t: ['double bull', '15 outer single', 'double bull'] },
  { n: 114, t: ['double bull', '14 outer single', 'double bull'] },
  { n: 113, t: ['double bull', '13 outer single', 'double bull'] },
  { n: 112, t: ['double bull', '12 outer single', 'double bull'] },
  { n: 111, t: ['double bull', '11 outer single', 'double bull'] },
  { n: 110, t: ['double bull', '10 outer single', 'double bull'] },
  { n: 109, t: ['double bull', '9 outer single', 'double bull'] },
  { n: 108, t: ['double bull', '8 outer single', 'double bull'] },
  { n: 107, t: ['double bull', '7 outer single', 'double bull'] },
  { n: 106, t: ['double bull', '6 outer single', 'double bull'] },
  { n: 105, t: ['double bull', '5 outer single', 'double bull'] },
  { n: 104, t: ['double bull', '4 outer single', 'double bull'] },
  { n: 103, t: ['double bull', '3 outer single', 'double bull'] },
  { n: 102, t: ['double bull', '2 outer single', 'double bull'] },
  { n: 101, t: ['double bull', '1 outer single', 'double bull'] },
  { n: 100, t: ['double bull', 'double bull'] },
  { n: 99, t: ['17 triple', '16 triple'] },
  { n: 98, t: ['double bull', '16 triple'] },
  { n: 97, t: ['19 triple', '20 double'] },
  { n: 96, t: ['20 triple', '18 double'] },
  { n: 95, t: ['double bull', '15 triple'] },
  { n: 94, t: ['18 triple', '20 double'] },
  { n: 93, t: ['19 triple', '18 double'] },
  { n: 92, t: ['double bull', '14 triple'] },
  { n: 91, t: ['17 triple', '20 double'] },
  { n: 90, t: ['double bull', '20 double'] },
  { n: 89, t: ['double bull', '13 triple'] },
  { n: 88, t: ['double bull', '19 double'] },
  { n: 87, t: ['17 triple', '18 double'] },
  { n: 86, t: ['double bull', '18 double'] },
  { n: 85, t: ['15 triple', '20 double'] },
  { n: 84, t: ['double bull', '17 double'] },
  { n: 83, t: ['17 triple', '16 double'] },
  { n: 82, t: ['double bull', '16 double'] },
  { n: 81, t: ['19 triple', '12 double'] },
  { n: 80, t: ['double bull', '15 double'] },
  { n: 79, t: ['19 triple', '11 double'] },
  { n: 78, t: ['double bull', '14 double'] },
  { n: 77, t: ['17 triple', '13 double'] },
  { n: 76, t: ['double bull', '13 double'] },
  { n: 75, t: ['15 triple', '15 double'] },
  { n: 74, t: ['double bull', '12 double'] },
  { n: 73, t: ['19 triple', '8 double'] },
  { n: 72, t: ['12 triple', '18 double'] },
  { n: 71, t: ['17 triple', '10 double'] },
  { n: 70, t: ['20 outer single', 'double bull'] },
  { n: 69, t: ['19 outer single', 'double bull'] },
  { n: 68, t: ['18 outer single', 'double bull'] },
  { n: 67, t: ['17 outer single', 'double bull'] },
  { n: 66, t: ['16 outer single', 'double bull'] },
  { n: 65, t: ['15 outer single', 'double bull'] },
  { n: 64, t: ['14 outer single', 'double bull'] },
  { n: 63, t: ['13 outer single', 'double bull'] },
  { n: 62, t: ['12 outer single', 'double bull'] },
  { n: 61, t: ['11 outer single', 'double bull'] },
  { n: 60, t: ['20 triple'] },
  { n: 59, t: ['9 outer single', 'double bull'] },
  { n: 58, t: ['8 outer single', 'double bull'] },
  { n: 57, t: ['19 triple'] },
  { n: 56, t: ['6 outer single', 'double bull'] },
  { n: 55, t: ['5 outer single', 'double bull'] },
  { n: 54, t: ['18 triple'] },
  { n: 53, t: ['3 outer single', 'double bull'] },
  { n: 52, t: ['2 outer single', 'double bull'] },
  { n: 51, t: ['17 triple'] },
  { n: 50, t: ['double bull'] },
  { n: 49, t: ['17 outer single', '16 double'] },
  { n: 48, t: ['16 triple'] },
  { n: 47, t: ['7 outer single', '20 double'] },
  { n: 46, t: ['6 outer single', '20 double'] },
  { n: 45, t: ['15 triple'] },
  { n: 44, t: ['4 outer single', '20 double'] },
  { n: 43, t: ['3 outer single', '20 double'] },
  { n: 42, t: ['14 triple'] },
  { n: 41, t: ['11 outer single', '15 double'] },
  { n: 40, t: ['20 double'] },
  { n: 39, t: ['13 triple'] },
  { n: 38, t: ['19 double'] },
  { n: 37, t: ['5 outer single', '16 double'] },
  { n: 36, t: ['18 double'] },
  { n: 35, t: ['3 outer single', '16 double'] },
  { n: 34, t: ['17 double'] },
  { n: 33, t: ['1 outer single', '16 double'] },
  { n: 32, t: ['16 double'] },
  { n: 31, t: ['15 outer single', '8 double'] },
  { n: 30, t: ['15 double'] },
  { n: 29, t: ['13 outer single', '8 double'] },
  { n: 28, t: ['14 double'] },
  { n: 27, t: ['9 triple'] },
  { n: 26, t: ['13 double'] },
  { n: 25, t: ['17 outer single', '4 double'] },
  { n: 24, t: ['12 double'] },
  { n: 23, t: ['7 outer single', '8 double'] },
  { n: 22, t: ['11 double'] },
  { n: 21, t: ['7 triple'] },
  { n: 20, t: ['10 double'] },
  { n: 19, t: ['3 outer single', '8 double'] },
  { n: 18, t: ['9 double'] },
  { n: 17, t: ['1 outer single', '8 double'] },
  { n: 16, t: ['8 double'] },
  { n: 15, t: ['5 triple'] },
  { n: 14, t: ['7 double'] },
  { n: 13, t: ['5 outer single', '4 double'] },
  { n: 12, t: ['6 double'] },
  { n: 11, t: ['3 outer single', '4 double'] },
  { n: 10, t: ['5 double'] },
  { n: 9, t: ['3 triple'] },
  { n: 8, t: ['4 double'] },
  { n: 7, t: ['3 outer single', '2 double'] },
  { n: 6, t: ['3 double'] },
  { n: 5, t: ['1 outer single', '2 double'] },
  { n: 4, t: ['2 double'] },
  { n: 3, t: ['1 triple'] },
  { n: 2, t: ['1 double'] },
];
