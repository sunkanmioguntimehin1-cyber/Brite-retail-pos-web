export function ColorPalette() {
  const palettes = [
    {
      name: 'Ink (text & icon)',
      shades: [
        { name: '900', hex: '#0E0E0E' },
        { name: '800', hex: '#1A1A1A' },
        { name: '700', hex: '#3D3D3D' },
        { name: '500', hex: '#6B6B6B' },
        { name: '300', hex: '#9A9A9A' },
        { name: '100', hex: '#D4D4D4' },
      ],
    },
    {
      name: 'Brand blue (primary action)',
      shades: [
        { name: '50', hex: '#E6F1FB' },
        { name: '100', hex: '#B5D4F4' },
        { name: '400', hex: '#378ADD' },
        { name: '500', hex: '#185FA5' },
        { name: '600', hex: '#0C447C' },
        { name: '700', hex: '#042C53' },
      ],
    },
    {
      name: 'Success green',
      shades: [
        { name: '50', hex: '#EAF3DE' },
        { name: '100', hex: '#C0DD97' },
        { name: '400', hex: '#639922' },
        { name: '500', hex: '#3B6D11' },
        { name: '600', hex: '#27500A' },
        { name: '700', hex: '#173404' },
      ],
    },
    {
      name: 'Warning amber',
      shades: [
        { name: '50', hex: '#FAEEDA' },
        { name: '100', hex: '#FAC775' },
        { name: '400', hex: '#EF9F27' },
        { name: '500', hex: '#BA7517' },
        { name: '600', hex: '#854F0B' },
        { name: '700', hex: '#412402' },
      ],
    },
    {
      name: 'Danger red',
      shades: [
        { name: '50', hex: '#FCEBEB' },
        { name: '100', hex: '#F7C1C1' },
        { name: '400', hex: '#E24B4A' },
        { name: '500', hex: '#A32D2D' },
        { name: '600', hex: '#791F1F' },
        { name: '700', hex: '#501313' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Color palette
        </h3>
        <div className="flex flex-col gap-4">
          {palettes.map((palette) => (
            <div key={palette.name}>
              <div className="text-[11px] text-[var(--color-text-tertiary)] mb-1">
                {palette.name}
              </div>
              <div className="flex gap-1">
                {palette.shades.map((shade) => (
                  <div
                    key={shade.name}
                    className="flex-1 h-7 rounded-sm border border-[var(--color-border-tertiary)] cursor-pointer transition-transform hover:scale-105"
                    style={{ backgroundColor: shade.hex }}
                    title={`${shade.name}: ${shade.hex}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <TypographyScale />
        <SpacingSystem />
        <BorderRadius />
      </div>
    </div>
  );
}

function TypographyScale() {
  const scales = [
    { name: 'Display', size: '28px', weight: '500', use: 'Page titles, KPI numbers' },
    { name: 'Heading', size: '20px', weight: '500', use: 'Section headings' },
    { name: 'Subheading', size: '15px', weight: '500', use: 'Card titles' },
    { name: 'Body', size: '13px', weight: '400', use: 'Table rows, descriptions' },
    { name: 'Caption', size: '11px', weight: '400', use: 'Labels, metadata' },
  ];

  return (
    <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
      <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
        Typography scale
      </h3>
      <div className="flex flex-col gap-2.5">
        {scales.map((scale) => (
          <div key={scale.name} className="flex items-baseline gap-2.5">
            <div
              style={{
                fontSize: scale.size,
                fontWeight: scale.weight,
                lineHeight: scale.name === 'Display' ? '1.1' : '1.3',
              }}
            >
              {scale.name}
            </div>
            <div className="text-[11px] text-[var(--color-text-tertiary)]">
              {scale.size} / {scale.weight} — {scale.use}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpacingSystem() {
  const spacings = [
    { px: 4, label: 'icon gap, tight inline' },
    { px: 8, label: 'element padding' },
    { px: 12, label: 'card internal gap' },
    { px: 16, label: 'card padding, grid gap' },
    { px: 24, label: 'section gap' },
    { px: 32, label: 'page section separation' },
  ];

  return (
    <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
      <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
        Spacing scale (4px base)
      </h3>
      <div className="flex flex-col gap-2">
        {spacings.map((s) => (
          <div key={s.px} className="flex items-center gap-3">
            <div className="text-[12px] text-[var(--color-text-secondary)] min-w-[40px]">
              {s.px}px
            </div>
            <div
              className="h-4 rounded-sm bg-[var(--color-brand-50)]"
              style={{ width: s.px }}
            />
            <div className="text-[11px] text-[var(--color-text-tertiary)]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BorderRadius() {
  const radii = [
    { name: '4px', value: '4px', use: 'tag' },
    { name: '8px', value: '8px', use: 'btn' },
    { name: '12px', value: '12px', use: 'card' },
    { name: '16px', value: '16px', use: 'modal' },
    { name: 'pill', value: '99px', use: 'badge' },
  ];

  return (
    <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
      <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
        Border radius
      </h3>
      <div className="flex gap-4 items-center">
        {radii.map((r) => (
          <div key={r.name} className="flex flex-col items-center gap-1">
            <div
              className="w-8 h-8 bg-[var(--color-brand-50)]"
              style={{ borderRadius: r.value }}
            />
            <div className="text-[10px] text-[var(--color-text-tertiary)]">
              {r.use}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
