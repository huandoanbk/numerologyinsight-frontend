import { Injectable } from '@angular/core';
import { type Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumerologyService {
  private formData: { name: string; birthDate: string } | null = null;
  private savedReport: any = null;

  constructor() {}

  // Save form data from home page
  saveFormData(name: string, birthDate: string): void {
    this.formData = { name, birthDate };
  }

  // Get saved form data
  getSavedFormData(): { name: string; birthDate: string } | null {
    return this.formData;
  }

  // Save generated report
  saveReport(report: any): void {
    this.savedReport = report;
  }

  // Get saved report
  getSavedReport(): any {
    return this.savedReport;
  }

  // Generate numerology report
  generateReport(name: string, birthDate: string): Observable<any> {
    // Calculate numerology numbers
    const lifePathNumber = this.calculateLifePathNumber(birthDate);
    const expressionNumber = this.calculateExpressionNumber(name);
    const soulUrgeNumber = this.calculateSoulUrgeNumber(name);
    const personalityNumber = this.calculatePersonalityNumber(name);

    // Create report object
    const report = {
      name,
      birthDate,
      lifePathNumber,
      expressionNumber,
      soulUrgeNumber,
      personalityNumber,
      lifePathDescription: this.getLifePathDescription(lifePathNumber),
      expressionDescription: this.getExpressionDescription(expressionNumber),
      soulUrgeDescription: this.getSoulUrgeDescription(soulUrgeNumber),
      personalityDescription: this.getPersonalityDescription(personalityNumber),
    };

    // Save the report
    this.saveReport(report);

    // Return as observable with delay to simulate API call
    return of(report).pipe(delay(1500));
  }

  // Calculate Life Path Number from birth date
  private calculateLifePathNumber(birthDate: string): number {
    // Simple implementation for demo purposes
    // In a real app, this would have more complex logic
    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Sum all digits
    const sum = this.sumDigits(day) + this.sumDigits(month) + this.sumDigits(year);

    // Reduce to a single digit (1-9)
    return this.reduceToSingleDigit(sum);
  }

  // Calculate Expression Number from full name
  private calculateExpressionNumber(name: string): number {
    // Simple implementation for demo purposes
    const sum = this.sumNameValue(name);
    return this.reduceToSingleDigit(sum);
  }

  // Calculate Soul Urge Number from vowels in name
  private calculateSoulUrgeNumber(name: string): number {
    // Extract vowels and calculate
    const vowels = name.toLowerCase().replace(/[^aeiou]/g, '');
    const sum = this.sumNameValue(vowels);
    return this.reduceToSingleDigit(sum);
  }

  // Calculate Personality Number from consonants in name
  private calculatePersonalityNumber(name: string): number {
    // Extract consonants and calculate
    const consonants = name.toLowerCase().replace(/[aeiou\s]/g, '');
    const sum = this.sumNameValue(consonants);
    return this.reduceToSingleDigit(sum);
  }

  // Helper to sum digits in a number
  private sumDigits(num: number): number {
    return num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number.parseInt(digit, 10), 0);
  }

  // Helper to reduce a number to a single digit (1-9)
  private reduceToSingleDigit(num: number): number {
    if (num <= 9) return num;
    return this.reduceToSingleDigit(this.sumDigits(num));
  }

  // Helper to sum the numerical value of letters in a name
  private sumNameValue(name: string): number {
    const letterValues: { [key: string]: number } = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 1,
      k: 2,
      l: 3,
      m: 4,
      n: 5,
      o: 6,
      p: 7,
      q: 8,
      r: 9,
      s: 1,
      t: 2,
      u: 3,
      v: 4,
      w: 5,
      x: 6,
      y: 7,
      z: 8,
    };

    return name
      .toLowerCase()
      .split('')
      .filter((char) => /[a-z]/.test(char))
      .reduce((sum, char) => sum + (letterValues[char] || 0), 0);
  }

  // Get description for Life Path Number
  private getLifePathDescription(number: number): string {
    const descriptions = [
      '',
      "You are a natural leader with strong independence and originality. You're ambitious, individualistic, and have a strong drive to succeed on your own terms.",
      'You are diplomatic and cooperative. Your strength lies in your ability to find balance and harmony in relationships and partnerships.',
      'You are creative, expressive, and socially engaging. You have a natural charm and optimism that draws others to you.',
      'You are practical, methodical, and highly organized. You value stability and are willing to work hard to build a secure foundation.',
      'You are adaptable, versatile, and value freedom. You embrace change and seek varied experiences throughout life.',
      'You are responsible, nurturing, and service-oriented. You find fulfillment in helping others and creating harmony.',
      'You are analytical, introspective, and spiritually inclined. You seek knowledge and truth through deep contemplation.',
      "You are ambitious, goal-oriented, and have strong leadership abilities. You're drawn to power and material success.",
      'You are compassionate, idealistic, and humanitarian. You see the bigger picture and are drawn to serve humanity.',
    ];
    return descriptions[number] || 'Description not available';
  }

  // Get description for Expression Number
  private getExpressionDescription(number: number): string {
    const descriptions = [
      '',
      "You express yourself as a leader and innovator. You're independent, original, and have the ability to pioneer new paths.",
      "You express yourself through diplomacy and cooperation. You're sensitive to others' needs and excel in partnerships.",
      "You express yourself creatively and socially. You're optimistic, expressive, and have natural communication skills.",
      "You express yourself through methodical work and organization. You're practical, reliable, and build solid foundations.",
      "You express yourself through versatility and adaptability. You're curious, progressive, and value freedom.",
      "You express yourself through responsibility and service. You're nurturing, supportive, and create harmony.",
      "You express yourself through analysis and contemplation. You're introspective, perfectionistic, and seek deeper meaning.",
      "You express yourself through ambition and authority. You're powerful, goal-oriented, and drawn to material success.",
      "You express yourself through compassion and idealism. You're humanitarian, spiritual, and have universal awareness.",
    ];
    return descriptions[number] || 'Description not available';
  }

  // Get description for Soul Urge Number
  private getSoulUrgeDescription(number: number): string {
    const descriptions = [
      '',
      "Deep down, you desire independence and leadership. You're driven by the need to be original and to pioneer new paths.",
      'Your inner desire is for harmony and cooperation. You seek peace and meaningful connections with others.',
      "Your soul yearns for self-expression and joy. You're motivated by creativity, sociability, and optimism.",
      'You inwardly desire stability and order. Your motivation comes from building secure foundations and practical achievements.',
      'Your inner desire is for freedom and change. You seek varied experiences and resist limitations.',
      "Deep down, you desire to be of service and create harmony. You're motivated by responsibility and nurturing others.",
      "Your soul yearns for wisdom and understanding. You're driven by the pursuit of knowledge and perfection.",
      "Your inner desire is for power and accomplishment. You're motivated by ambition and material success.",
      "Deep down, you desire to make a difference in the world. You're motivated by compassion and universal service.",
    ];
    return descriptions[number] || 'Description not available';
  }

  // Get description for Personality Number
  private getPersonalityDescription(number: number): string {
    const descriptions = [
      '',
      'Others see you as independent, strong-willed, and original. You appear confident, assertive, and self-reliant.',
      'People perceive you as diplomatic, cooperative, and sensitive. You come across as balanced, considerate, and peaceful.',
      'Others see you as creative, social, and optimistic. You appear expressive, charming, and full of life.',
      'People perceive you as practical, reliable, and organized. You come across as stable, hardworking, and dependable.',
      'Others see you as adaptable, progressive, and freedom-loving. You appear versatile, curious, and adventurous.',
      'People perceive you as responsible, nurturing, and harmonious. You come across as caring, supportive, and balanced.',
      'Others see you as analytical, thoughtful, and perfectionistic. You appear introspective, wise, and detail-oriented.',
      'People perceive you as powerful, ambitious, and authoritative. You come across as confident, goal-oriented, and in control.',
      'Others see you as compassionate, idealistic, and spiritual. You appear wise, humanitarian, and universally minded.',
    ];
    return descriptions[number] || 'Description not available';
  }
}
