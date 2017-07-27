import { Injectable } from '@angular/core';

import { ITEMS,COMPANIES,ASSOCIATES } from './mockdb';

@Injectable()
export class GlobalSearchService {

  constructor() { }

  getAssociates():any[]{
    return ASSOCIATES;
  }

  getCompanies():any[]{
    return COMPANIES;
  }
  
  getItems():any[]{
    return ITEMS;
  }

}
