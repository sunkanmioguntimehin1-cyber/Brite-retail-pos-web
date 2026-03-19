export function UXPatterns() {
  return (
    <div className="space-y-4">
      {/* Interaction Rules */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          10 Interaction Rules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px]">
          {[
            { num: '1', rule: 'Buttons trigger actions; links navigate. Never use links for actions.' },
            { num: '2', rule: 'Confirm destructive actions (delete, void) with a modal dialog.' },
            { num: '3', rule: 'Show loading states immediately; don\'t wait for timeouts.' },
            { num: '4', rule: 'Validate on blur for forms; show errors inline next to fields.' },
            { num: '5', rule: 'Use progressive disclosure; don\'t overwhelm users with all options.' },
            { num: '6', rule: 'Toast notifications for non-critical feedback; modals for critical.' },
            { num: '7', rule: 'Auto-save drafts; confirm before major state changes.' },
            { num: '8', rule: 'Optimistic UI updates; revert if server fails.' },
            { num: '9', rule: 'Support undo for reversible actions (archive, restore).' },
            { num: '10', rule: 'Paginate lists over 20 items; use infinite scroll for feeds.' },
          ].map((item) => (
            <div key={item.num} className="flex gap-2">
              <span className="w-5 h-5 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-400)] flex items-center justify-center text-[11px] font-medium flex-shrink-0">
                {item.num}
              </span>
              <span className="text-[var(--color-text-secondary)]">{item.rule}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Empty States */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
          <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
            Empty States
          </h3>
          <div className="flex flex-col gap-3">
            {/* Empty table */}
            <div className="text-center py-8 px-4 border border-dashed border-[var(--color-border-tertiary)] rounded-lg">
              <div className="text-2xl mb-2">📦</div>
              <div className="text-[13px] font-medium mb-1">No products yet</div>
              <div className="text-[11px] text-[var(--color-text-tertiary)] mb-3">
                Add your first product to get started
              </div>
              <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-ink-900)] text-white">
                + Add Product
              </button>
            </div>
            {/* Empty search */}
            <div className="text-center py-6 px-4">
              <div className="text-xl mb-1">🔍</div>
              <div className="text-[13px] font-medium mb-1">No results found</div>
              <div className="text-[11px] text-[var(--color-text-tertiary)]">
                Try adjusting your search or filters
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton Loaders */}
        <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
          <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
            Skeleton Loaders
          </h3>
          <div className="flex flex-col gap-3">
            {/* Card skeleton */}
            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-lg skeleton" />
              <div className="flex-1">
                <div className="h-4 w-32 rounded skeleton mb-1" />
                <div className="h-3 w-20 rounded skeleton" />
              </div>
              <div className="h-8 w-16 rounded-md skeleton" />
            </div>
            {/* Table skeleton */}
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-t border-[var(--color-border-tertiary)]">
                  <div className="w-4 h-4 rounded skeleton" />
                  <div className="w-8 h-8 rounded skeleton" />
                  <div className="flex-1">
                    <div className="h-3 w-28 rounded skeleton mb-1" />
                    <div className="h-2.5 w-20 rounded skeleton" />
                  </div>
                  <div className="h-3 w-16 rounded skeleton" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Destructive Confirmation */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Destructive Action Confirmation
        </h3>
        <div className="max-w-md mx-auto">
          <div className="border border-[var(--color-border-tertiary)] rounded-xl overflow-hidden">
            <div className="p-4 border-b border-[var(--color-border-tertiary)]">
              <div className="text-[15px] font-medium mb-1">Delete product?</div>
              <div className="text-[13px] text-[var(--color-text-secondary)]">
                This will permanently remove &quot;Wireless Earbuds Pro&quot; from your catalog. This action cannot be undone.
              </div>
            </div>
            <div className="p-3 bg-[var(--color-background-secondary)] flex justify-end gap-2">
              <button className="px-4 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] hover:bg-white transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-danger-400)] text-white hover:bg-[var(--color-danger-500)] transition-colors">
                Delete product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Standards */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Accessibility Standards (WCAG AA)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { icon: '🎨', title: 'Color Contrast', desc: 'Minimum 4.5:1 for normal text, 3:1 for large text' },
            { icon: '⌨️', title: 'Focus Rings', desc: '2px visible outline on all interactive elements' },
            { icon: '🏷️', title: 'ARIA Labels', desc: 'Descriptive labels on icon-only buttons' },
            { icon: '⌨️', title: 'Keyboard Nav', desc: 'Full functionality without mouse' },
            { icon: '📱', title: 'Touch Targets', desc: 'Minimum 44x44px for mobile' },
            { icon: '🌗', title: 'Reduced Motion', desc: 'Respect prefers-reduced-motion' },
          ].map((item) => (
            <div key={item.title} className="flex gap-2.5 p-2.5 rounded-lg border border-[var(--color-border-tertiary)]">
              <span className="text-lg">{item.icon}</span>
              <div>
                <div className="text-[12px] font-medium mb-0.5">{item.title}</div>
                <div className="text-[11px] text-[var(--color-text-tertiary)]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
