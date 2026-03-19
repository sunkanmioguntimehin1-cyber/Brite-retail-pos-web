export function ComponentsLibrary() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Buttons */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Buttons
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors">
              Primary
            </button>
            <button className="px-4 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
              Secondary
            </button>
            <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-danger-400)] text-white hover:bg-[var(--color-danger-500)] transition-colors">
              Danger
            </button>
            <button className="px-4 py-2 text-[13px] rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] transition-colors">
              Ghost
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-brand-400)] text-white hover:bg-[var(--color-brand-500)] transition-colors">
              Brand
            </button>
            <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-success-400)] text-white hover:bg-[var(--color-success-500)] transition-colors">
              Success
            </button>
            <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-warning-400)] text-white hover:bg-[var(--color-warning-500)] transition-colors">
              Warning
            </button>
            <button disabled className="px-4 py-2 text-[13px] rounded-md bg-[var(--color-border-tertiary)] text-[var(--color-text-tertiary)] cursor-not-allowed">
              Disabled
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 text-[11px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors">
              Small
            </button>
            <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors">
              Medium
            </button>
            <button className="px-5 py-3 text-[15px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors">
              Large
            </button>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Badges
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--color-success-50)] text-[var(--color-success-400)]">
            Success
          </span>
          <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--color-warning-50)] text-[var(--color-warning-400)]">
            Warning
          </span>
          <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--color-danger-50)] text-[var(--color-danger-400)]">
            Danger
          </span>
          <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-400)]">
            Info
          </span>
          <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)]">
            Gray
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--color-ink-900)] text-white">
            Dark
          </span>
          <span className="px-3 py-1 text-[13px] font-medium rounded-full bg-[var(--color-success-50)] text-[var(--color-success-400)]">
            Larger Badge
          </span>
        </div>
      </div>

      {/* Form Controls */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Form Controls
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
              Text Input
            </label>
            <input
              type="text"
              placeholder="Enter value…"
              className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[var(--color-brand-50)] outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
              Select
            </label>
            <select className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-[var(--color-border-secondary)] text-[var(--color-brand-400)] focus:ring-[var(--color-brand-50)]" />
              <span className="text-[13px]">Checkbox</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="radio" className="w-4 h-4 border-[var(--color-border-secondary)] text-[var(--color-brand-400)] focus:ring-[var(--color-brand-50)]" />
              <span className="text-[13px]">Radio</span>
            </label>
          </div>
          <div>
            <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
              Textarea
            </label>
            <textarea
              rows={3}
              placeholder="Enter description…"
              className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white resize-none"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Notifications
        </h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-2.5 p-3 rounded-lg border border-[var(--color-border-tertiary)]">
            <div className="w-2 h-2 rounded-full mt-1.5 bg-[var(--color-brand-400)] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-[13px] font-medium">Info notification</div>
              <div className="text-[11px] text-[var(--color-text-secondary)]">
                This is an informational message for the user.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-lg border border-[var(--color-success-100)] bg-[var(--color-success-50)]">
            <div className="w-2 h-2 rounded-full mt-1.5 bg-[var(--color-success-400)] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-[13px] font-medium text-[var(--color-success-500)]">Success notification</div>
              <div className="text-[11px] text-[var(--color-success-500)]">
                Your action was completed successfully.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-lg border border-[var(--color-warning-100)] bg-[var(--color-warning-50)]">
            <div className="w-2 h-2 rounded-full mt-1.5 bg-[var(--color-warning-400)] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-[13px] font-medium text-[var(--color-warning-500)]">Warning notification</div>
              <div className="text-[11px] text-[var(--color-warning-500)]">
                Please review the selected items before proceeding.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-lg border border-[var(--color-danger-100)] bg-[var(--color-danger-50)]">
            <div className="w-2 h-2 rounded-full mt-1.5 bg-[var(--color-danger-400)] flex-shrink-0" />
            <div className="flex-1">
              <div className="text-[13px] font-medium text-[var(--color-danger-500)]">Error notification</div>
              <div className="text-[11px] text-[var(--color-danger-500)]">
                An error occurred. Please try again.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Progress Bars
        </h3>
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex justify-between text-[12px] mb-1">
              <span>Default</span>
              <span>75%</span>
            </div>
            <div className="h-2 bg-[var(--color-border-tertiary)] rounded-full overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-[var(--color-brand-400)]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[12px] mb-1">
              <span>Success</span>
              <span>100%</span>
            </div>
            <div className="h-2 bg-[var(--color-border-tertiary)] rounded-full overflow-hidden">
              <div className="h-full w-full rounded-full bg-[var(--color-success-400)]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[12px] mb-1">
              <span>Warning</span>
              <span>45%</span>
            </div>
            <div className="h-2 bg-[var(--color-border-tertiary)] rounded-full overflow-hidden">
              <div className="h-full w-2/5 rounded-full bg-[var(--color-warning-400)]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[12px] mb-1">
              <span>Danger</span>
              <span>25%</span>
            </div>
            <div className="h-2 bg-[var(--color-border-tertiary)] rounded-full overflow-hidden">
              <div className="h-full w-1/4 rounded-full bg-[var(--color-danger-400)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Avatars */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Avatars
        </h3>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-400)] flex items-center justify-center text-[11px] font-medium">
            AM
          </div>
          <div className="w-10 h-10 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-400)] flex items-center justify-center text-[13px] font-medium">
            AM
          </div>
          <div className="w-12 h-12 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-400)] flex items-center justify-center text-[15px] font-medium">
            AM
          </div>
          <div className="w-10 h-10 rounded-full bg-[var(--color-success-50)] text-[var(--color-success-400)] flex items-center justify-center">
            ✓
          </div>
          <div className="w-10 h-10 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)]" />
        </div>
      </div>
    </div>
  );
}
