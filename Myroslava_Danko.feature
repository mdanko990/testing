Feature: Epam

    Scenario: Open site of Epam company
      Given enter in search bar https://www.epam.com/
      When click search
      Then open main page of site

    Scenario: Change language of site to Ukraininan
      Given https://www.epam.com/
      When click on language dropdown list
      Then choose 'Ukraine' option
      Then open (https://careers.epam.ua/) page - ukrainian version of site

    Scenario: Contact to company
      Given https://www.epam.com/
      When click on letter image
      Then open form for sending (https://www.epam.com/about/who-we-are/contact)
    
    Scenario: Change language of site
      Given https://www.epam.com/
      Then click on language on top of page
      Then choose language
      Then site in the selected language
    
    Scenario: Return to main page
      Given https://www.epam.com/services
      When click on logo picture
      Then openned start of main page
    
    Scenario: Find locations of offices
      Given https://www.epam.com/
      When swape to the end of page up to 'our offices'
      Then choose part of the world
      Then choose country
      Then list of offices in that country

    Scenario: Discover cases
      Given https://www.epam.com/
      When click on menu button
      Then hover on 'our work'
      Then open dropdown list of cases

    Scenario: Searsh action
      Given https://www.epam.com/
      Then click on search icon
      Then open input block for searching
