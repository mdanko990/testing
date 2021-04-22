Feature: Epam

    Scenario: Open site of Epam company
      Given enter in search bar https://www.epam.com/
      When click search
      Then open main page of site

    Scenario: Look for a job
      Given main page of Emap's site
      When click on menu button
      Then choose 'CAREERS'
      Then choose 'Join our Team'
      Then set parameters (Location, Skills)
      Then list of offers with parameters location and skills
    
    Scenario: Learn about company
      Given main page of Emap's site
      When click on menu button
      Then choose 'about'
      Then information about history, partners etc (https://www.epam.com/about)
    
    Scenario: Contact to company
      Given main page of Emap's site
      When click on letter image
      Then open form for sending (https://www.epam.com/about/who-we-are/contact)
    
    Scenario: Change language of site
      Given main page of Emap's site
      Then click on language on top of page
      Then choose language
      Then site in the selected language
    
    Scenario: Return to main page
      Given any page of site (Epam)
      When click on logo picture
      Then openned start of main page
    
    Scenario: Find locations of offices
      Given main page
      When swape to the end of page up to 'our offices'
      Then choose part of the world
      Then choose country
      Then list of offices in that country

    Scenario: Discover cases
      Given main page of Emap's site
      When click on menu button
      Then choose 'our work'
      Then list of cases

