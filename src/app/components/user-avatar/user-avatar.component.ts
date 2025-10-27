import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../interface/recibos';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit, OnChanges {
  @Input() user: Usuario | null = null;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  initials: string = '';
  userName: string = '';

  ngOnInit() {
    this.loadUserData();
  }

  ngOnChanges() {
    this.loadUserData();
  }

  private loadUserData() {
    if (this.user) {
      this.userName = this.user.NOMBRE || '';
      this.initials = this.getInitials(this.userName);
    } else {
      // Si no hay usuario pasado como input, intentar obtenerlo del localStorage
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        this.userName = user.NOMBRE || '';
        this.initials = this.getInitials(this.userName);
      } else {
        this.userName = '';
        this.initials = '';
      }
    }
  }

  private getInitials(name: string): string {
    if (!name) return '';
    
    const words = name.trim().split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    } else {
      return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
    }
  }

  getSizeClass(): string {
    return `avatar-${this.size}`;
  }
}