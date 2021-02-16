import { DomSanitizer } from '@angular/platform-browser'
import { PipeTransform, Pipe } from '@angular/core'
import { CommonModule } from '@angular/common'

@Pipe({
    name: 'safeHtml',
    pure: false
})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanizer: DomSanitizer) { }
    transform(value: any): any {
        return this.sanizer.bypassSecurityTrustHtml(value)
    }
}